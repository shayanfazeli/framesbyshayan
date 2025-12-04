#!/usr/bin/env bash
sudo chown -R "$(whoami)" "$(npm config get prefix)/"{lib/node_modules,bin,share}