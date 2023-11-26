{ pkgs ? import <nixpkgs> {}}:
let
  fhs = pkgs.buildFHSUserEnv {
    name = "build-conda-env";

    targetPkgs = _: [
      pkgs.micromamba
    ];

    profile = ''
      set -e
      export ENV_NAME="langchain"
      export MAMBA_ROOT_PREFIX=${builtins.getEnv "PWD"}/.mamba
      eval "$(micromamba shell hook --shell=bash | sed 's/complete / # complete/g')"
      micromamba create --yes -q -n $ENV_NAME
      micromamba activate $ENV_NAME
      micromamba install --yes -f environment.yml -c conda-forge
      set +e
    '';


  };
in fhs.env

