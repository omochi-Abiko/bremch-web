import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const admins = sqliteTable('admins', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  username: text('username').unique().notNull(),
  passwordHash: text('password_hash').notNull(),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

export const pageContents = sqliteTable(
  'page_contents',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    pageSlug: text('page_slug').notNull(),
    sectionKey: text('section_key').notNull(),
    content: text('content').notNull(),
    updatedAt: text('updated_at').default(sql`(datetime('now'))`),
  },
  (table) => [
    uniqueIndex('page_section_idx').on(table.pageSlug, table.sectionKey),
  ],
);

export const companyInfo = sqliteTable('company_info', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  key: text('key').unique().notNull(),
  value: text('value').notNull(),
});

export const teamMembers = sqliteTable('team_members', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  role: text('role').notNull(),
  bio: text('bio'),
  photoUrl: text('photo_url'),
  sortOrder: integer('sort_order').default(0),
  isVisible: integer('is_visible').default(1),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

export const contactSubmissions = sqliteTable('contact_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company'),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  isRead: integer('is_read').default(0),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

export const siteSettings = sqliteTable('site_settings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  key: text('key').unique().notNull(),
  value: text('value').notNull(),
});
