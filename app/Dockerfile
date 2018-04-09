# Dockerfile for cde-demo-app
# Freeze used node Docker container version to 9.
FROM node:9

# Expose port 8888 from container
EXPOSE 8888

# Run updates
RUN apt-get update

# Clean after apt-get update
RUN rm -rf /var/lib/apt/lists/* \ && apt-get -y autoclean

# Create application directory in /opt/www/ and add application files there
ENV APPLICATION_ROOT /opt/www/
ADD . /opt/www/

# Change working directory to application directory and start server
WORKDIR /opt/www/
CMD ["node", "index.js"]
