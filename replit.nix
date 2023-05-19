{ pkgs }: {
  deps = [
    pkgs.php artisan forest:setup-keys a6137939133ebc78fe7f1c7d7733da5447c2c0eaa24b6c1de07db179818d779c https://allaboutguineapigs.org
    pkgs.sudo
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}