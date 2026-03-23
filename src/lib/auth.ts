import type { SessionOptions } from 'iron-session';

export interface SessionData {
  userId?: number;
  username?: string;
  isLoggedIn?: boolean;
}

export const sessionOptions: SessionOptions = {
  cookieName: 'bremch_session',
  password:
    process.env.SESSION_SECRET ??
    'development-secret-change-in-production-please-32chars',
  ttl: 86400,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
  },
};
