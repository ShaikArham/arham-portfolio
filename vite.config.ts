import { defineConfig } from 'vite';
export default defineConfig({server:{allowedHosts:["terminal.local"]},define:{'process.env.NODE_ENV':JSON.stringify('production')},build:{minify:true,outDir:'carousel-build',emptyOutDir:true,lib:{entry:'src/main.tsx',formats:['es'],fileName:()=> 'carousel.js'},cssCodeSplit:false}});
