#!/bin/bash

STATUS=$1

if [ "$STATUS" = "success" ]; then
    MESSAGE="✅ Jenkins Build Successful!
Project: $JOB_NAME
Build: #$BUILD_NUMBER"
else
    MESSAGE="❌ Jenkins Build Failed!
Project: $JOB_NAME
Build: #$BUILD_NUMBER"
fi

curl -H "Content-Type: application/json" \
-X POST \
-d "{\"content\":\"$MESSAGE\"}" \
"$DISCORD_WEBHOOK"