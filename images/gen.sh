#!/bin/sh
inkscape --export-background=white --export-filename=wicon-192x192.png wicon.svg --export-width=192 --export-height=192
inkscape --export-background=white --export-filename=wicon-256x256.png wicon.svg --export-width=256 --export-height=256
inkscape --export-background=white --export-filename=wicon-384x384.png wicon.svg --export-width=384 --export-height=384
inkscape --export-background=white --export-filename=wicon-512x512.png wicon.svg --export-width=512 --export-height=512

inkscape --export-background=black --export-filename=bicon-192x192.png bicon.svg --export-width=192 --export-height=192
inkscape --export-background=black --export-filename=bicon-256x256.png bicon.svg --export-width=256 --export-height=256
inkscape --export-background=black --export-filename=bicon-384x384.png bicon.svg --export-width=384 --export-height=384
inkscape --export-background=black --export-filename=bicon-512x512.png bicon.svg --export-width=512 --export-height=512

inkscape --export-filename=icon-192x192.png icon.svg --export-width=192 --export-height=192
inkscape --export-filename=icon-256x256.png icon.svg --export-width=256 --export-height=256
inkscape --export-filename=icon-384x384.png icon.svg --export-width=384 --export-height=384
inkscape --export-filename=icon-512x512.png icon.svg --export-width=512 --export-height=512
