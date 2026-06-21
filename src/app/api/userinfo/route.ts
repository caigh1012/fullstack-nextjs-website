import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/database/prisma';

const TOKEN_COOKIE_KEY = 'token';

type TokenPayload = {
  sub?: string;
  username?: string;
};

export async function GET(request: NextRequest) {
  const token = request.cookies.get(TOKEN_COOKIE_KEY)?.value;

  if (!token) {
    return NextResponse.json({
      message: '当前为游客状态',
      data: null,
    });
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    return NextResponse.json({ message: '服务端未配置 JWT_SECRET' }, { status: 500 });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as TokenPayload;
    const userId = decoded.sub;

    if (!userId) {
      return NextResponse.json({ message: 'token 非法或无效，请重新登录' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: BigInt(userId) },
      select: {
        id: true,
        username: true,
        nickname: true,
        email: true,
        gender: true,
        avatarUrl: true,
        contactAddress: true,
        residenceAddress: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: '用户不存在或 token 无效，请重新登录' }, { status: 401 });
    }

    return NextResponse.json({
      message: '获取用户信息成功',
      data: {
        id: user.id.toString(),
        username: user.username,
        nickname: user.nickname,
        email: user.email,
        gender: user.gender,
        avatarUrl: user.avatarUrl,
        contactAddress: user.contactAddress,
        residenceAddress: user.residenceAddress,
      },
    });
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return NextResponse.json({ message: 'token 已过期，请重新登录' }, { status: 401 });
    }

    if (error instanceof JsonWebTokenError) {
      return NextResponse.json({ message: 'token 不正确或非法，请重新登录' }, { status: 401 });
    }

    return NextResponse.json({ message: '获取用户信息失败' }, { status: 500 });
  }
}
