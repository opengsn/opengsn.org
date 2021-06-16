#!/bin/bash -xe 
#note: we don't replace the https prefix, since some occurences have the protocol escaped
newlink='discord.gg/NXXTCbh58s'

#verify link is valid:
if ! curl -s -L https://$newlink|grep -m 1 OpenGSN; then
   echo "FATAL: broken new link"
   exit 2
fi

oldlink=`perl -ne 'print "$1\n" if /(discord.gg.\w+)/' snippets/1.html |head -1`

#old (stale) link doesn't have the channel name...
if curl -s -L https://$oldlink|grep -m 1 OpenGSN; then
   echo "WARNING: replacing a good (https://$oldlink) link."
fi

perl -pi -e "s!discord.gg/\w+!$newlink!g" `grep -r -l discord . --include '*.html'`
