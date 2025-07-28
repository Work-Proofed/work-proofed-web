#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download hero background - landscaping professional at work
curl "https://images.pexels.com/photos/589/garden-gardening-grass-lawn.jpg" -o public/images/hero-bg.jpg

# Download feature images
curl "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg" -o public/images/feature-1.jpg
curl "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg" -o public/images/feature-2.jpg
curl "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg" -o public/images/feature-3.jpg

# Create a placeholder logo (you should replace this with your actual logo)
convert -size 100x100 xc:transparent -fill "#27AE60" -draw "circle 50,50 50,20" public/images/logo.png
convert -size 100x100 xc:transparent -fill "#FFFFFF" -draw "circle 50,50 50,20" public/images/logo-white.png 