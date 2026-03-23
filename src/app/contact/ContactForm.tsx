'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setIsPending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const subject = (data.get('subject') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name || !email || !subject || !message) {
      setError('必須項目をすべて入力してください。');
      setIsPending(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('有効なメールアドレスを入力してください。');
      setIsPending(false);
      return;
    }

    // Simulate submission (replace with actual API endpoint later)
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setIsPending(false);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-forest-500/10 p-6 text-center">
        <svg
          className="mx-auto mb-3 h-12 w-12 text-forest-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="font-medium text-forest-700">
          お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <Input label="お名前" name="name" type="text" required placeholder="山田 太郎" />
      <Input label="メールアドレス" name="email" type="email" required placeholder="example@email.com" />
      <Input label="会社名" name="company" type="text" placeholder="株式会社○○（任意）" />
      <Input label="件名" name="subject" type="text" required placeholder="お問い合わせの件名" />
      <Input label="お問い合わせ内容" name="message" textarea required placeholder="お問い合わせ内容をご記入ください" />

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" disabled={isPending}>
          {isPending ? '送信中...' : '送信する'}
        </Button>
      </div>
    </form>
  );
}
