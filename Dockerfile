# Use official nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy your site content to nginx web root
COPY . .

# Expose port 80 (nginx default)
EXPOSE 80

# No need to specify CMD as nginx base image already does
