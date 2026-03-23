import readline from 'readline';
import { hash } from 'bcryptjs';
import { db } from '../src/lib/db/index';
import { admins } from '../src/lib/db/schema';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('=== Bremch Admin User Creation ===\n');

  const username = await question('Username: ');
  if (!username.trim()) {
    console.error('Error: Username cannot be empty.');
    process.exit(1);
  }

  const password = await question('Password: ');
  if (!password.trim()) {
    console.error('Error: Password cannot be empty.');
    process.exit(1);
  }

  if (password.length < 8) {
    console.error('Error: Password must be at least 8 characters.');
    process.exit(1);
  }

  const passwordHash = await hash(password, 12);

  try {
    await db.insert(admins).values({
      username: username.trim(),
      passwordHash,
    });
    console.log(`\nAdmin user "${username.trim()}" created successfully.`);
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      err.message.includes('UNIQUE constraint failed')
    ) {
      console.error(`\nError: Username "${username.trim()}" already exists.`);
    } else {
      console.error('\nError creating admin user:', err);
    }
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
