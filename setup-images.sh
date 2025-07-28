#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Create a base64 version of the images and decode them
echo "Creating app preview image..."
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==" | base64 -d > public/images/app-preview.png

# Download a placeholder app preview image (you should replace this with your actual app preview) 