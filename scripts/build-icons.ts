#!/usr/bin/env
import { icons } from '../dist/icons.mjs';
import { join } from '@std/path/join';
import { existsSync } from "jsr:@std/fs";

if (!existsSync(join(Deno.cwd(), '/lib'))) {
   Deno.mkdirSync(join(Deno.cwd(), '/lib'))
};
Deno.writeTextFileSync(join(Deno.cwd(), '/lib/icons.json'), JSON.stringify(icons));
