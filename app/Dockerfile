# Use node:9 as baseimage
FROM node:9

# Expose port 8888 from image to host OS
EXPOSE 8888

# Add application files to /opt/www/
ADD . /opt/www/

# Change working directory to application directory and start server
WORKDIR /opt/www/
CMD ["node", "index.js"]
