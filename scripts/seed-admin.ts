import { hashSync } from 'bcryptjs';
import { db } from '../src/lib/db/index';
import { admins } from '../src/lib/db/schema';

const passwordHash = hashSync('admin1234', 12);
db.insert(admins).values({ username: 'admin', passwordHash }).run();
console.log('Admin user created: admin / admin1234');
