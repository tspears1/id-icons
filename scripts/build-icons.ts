#!/usr/bin/env
import { icons } from '../icons/icons.ts';
import { join } from '@std/path/join';
import { existsSync } from "jsr:@std/fs";

if (!existsSync(join(Deno.cwd(), '/dist'))) {
   Deno.mkdirSync(join(Deno.cwd(), '/dist'))
};
Deno.writeTextFileSync(join(Deno.cwd(), '/dist/icons.json'), JSON.stringify(icons));
