# Use official Nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy your static website files
COPY index.html .
COPY styles.css .
COPY script.js .
COPY image ./image
COPY "Updated Resume.pdf" .

# Expose port 80
EXPOSE 80

# No need to specify CMD — default Nginx entrypoint will serve the files
