#!/bin/bash

# 🖼️ Script to replace placeholder images with local paths
# Run this after adding your project screenshots to public/images/projects/

echo "🚀 Starting image replacement script..."

# Create projects directories if they don't exist
mkdir -p public/images/projects/{tippmixpo,stake-leaderboard,betfair-odds,surebet-scanner,ml-prediction,strategy-backtester,horse-racing,portfolio-manager,live-odds,betting-network,darts-analytics}

echo "📁 Created project directories"

# Function to replace placeholder with local path
replace_placeholder() {
    local project=$1
    local filename=$2
    local search_text=$3
    
    # Replace main image
    sed -i '' "s|https://placehold.co/1024x768/404040/ffffff?text=${search_text}|/images/projects/${project}/${filename}|g" src/data/projects.ts
    
    echo "✅ Updated ${project}/${filename}"
}

# Replace main images for all projects
replace_placeholder "tippmixpo" "main.jpg" "Real-time+EV%2B+Dashboard"
replace_placeholder "stake-leaderboard" "main.jpg" "Live+Leaderboard+Dashboard"
replace_placeholder "betfair-odds" "main.jpg" "Odds+Drop+Monitor"
replace_placeholder "surebet-scanner" "main.jpg" "Arbitrage+Scanner"
replace_placeholder "ml-prediction" "main.jpg" "AI+Predictions"
replace_placeholder "strategy-backtester" "main.jpg" "Strategy+Simulator"
replace_placeholder "horse-racing" "main.jpg" "Horse+Racing+Analytics"
replace_placeholder "portfolio-manager" "main.jpg" "Dual+Platform+Interface"
replace_placeholder "live-odds" "main.jpg" "Crypto+Dashboard"
replace_placeholder "betting-network" "main.jpg" "Data+Streaming"
replace_placeholder "darts-analytics" "main.jpg" "Darts+Analytics"

# Replace gallery images (600x400)
sed -i '' 's|https://placehold.co/600x400/f5f5f5/666666?text=Probability+Calculator|/images/projects/tippmixpo/calculator.jpg|g' src/data/projects.ts
sed -i '' 's|https://placehold.co/600x400/f5f5f5/666666?text=Bot+Configuration|/images/projects/tippmixpo/bot-config.jpg|g' src/data/projects.ts

echo "🎉 Image replacement complete!"
echo ""
echo "📋 Next steps:"
echo "1. Add your actual images to public/images/projects/[project-name]/"
echo "2. Name them: main.jpg (1024x768), calculator.jpg, bot-config.jpg, etc."
echo "3. Run: git add . && git commit -m 'Update project images' && git push"
echo "4. Images will automatically deploy to AWS! 🚀"
