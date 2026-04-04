# Portfolio Admin Panel Setup Instructions

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:

```env
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/portfolio
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Generate a secret key using:
# openssl rand -base64 32
```

### 3. Seed the Database
Run the seeding script to populate your database with existing data:

```bash
npm run seed
```

This will:
- Clear existing data
- Create an admin user
- Import all experiences, projects, services, blogs, technologies, and site settings

**Default Admin Credentials:**
- Email: `admin@portfolio.com`
- Password: `admin123`

### 4. Start the Development Server
```bash
npm run dev
```

### 5. Access the Admin Panel
- Frontend: http://localhost:3000
- Admin Login: http://localhost:3000/admin/login
- Admin Dashboard: http://localhost:3000/admin/dashboard

## Admin Panel Features

### Dashboard Sections:

1. **Experiences** - Manage work experience entries
   - Add/Edit/Delete experiences
   - Set order for display
   - Add technologies used

2. **Projects** - Manage portfolio projects
   - Add/Edit/Delete projects
   - Upload project images
   - Add technologies used

3. **Services** - Manage services offered
   - Add/Edit/Delete services
   - Choose icons
   - Add feature lists

4. **Blogs** - Manage blog posts
   - Add/Edit/Delete blogs
   - Set internal or external URLs
   - Add categories and metadata

5. **Technologies** - Manage technology stack
   - Add/Edit/Delete technologies
   - Set icons and colors
   - Configure animation duration

6. **Settings** - Manage site-wide settings
   - Update hero section content
   - Update about section
   - Update contact information
   - Update social media links
   - Update profile images

## API Endpoints

All API endpoints are protected and require authentication (except GET requests):

- `GET/POST /api/experiences` - List/Create experiences
- `PUT/DELETE /api/experiences/[id]` - Update/Delete experience
- `GET/POST /api/projects` - List/Create projects
- `PUT/DELETE /api/projects/[id]` - Update/Delete project
- `GET/POST /api/services` - List/Create services
- `PUT/DELETE /api/services/[id]` - Update/Delete service
- `GET/POST /api/blogs` - List/Create blogs
- `PUT/DELETE /api/blogs/[id]` - Update/Delete blog
- `GET/POST /api/technologies` - List/Create technologies
- `PUT/DELETE /api/technologies/[id]` - Update/Delete technology
- `GET/PUT /api/settings` - Get/Update site settings

## Security Notes

1. **Change Default Password**: After first login, create a new admin user with a strong password
2. **Update NEXTAUTH_SECRET**: Generate a secure secret key for production
3. **MongoDB Security**: Use strong passwords and enable IP whitelisting for MongoDB Atlas
4. **Environment Variables**: Never commit `.env.local` to version control

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or your Atlas cluster is accessible
- Check your connection string format
- Verify network access settings in MongoDB Atlas

### Authentication Issues
- Clear browser cookies and try again
- Verify NEXTAUTH_URL matches your domain
- Check NEXTAUTH_SECRET is set correctly

### Seeding Issues
- Ensure MongoDB is running before seeding
- Check MongoDB connection string
- Verify you have write permissions to the database

## Production Deployment

### Environment Variables for Production:
```env
MONGODB_URI=your-production-mongodb-uri
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-production-secret-key
```

### Build and Deploy:
```bash
npm run build
npm start
```

## Support

For issues or questions, please check the documentation or contact the developer.
