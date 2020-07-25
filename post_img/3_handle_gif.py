import os
import shutil
import subprocess

DIR = os.path.realpath(os.path.dirname(__file__))
gifsicle = os.path.join(DIR,"gifsicle.exe").replace("\\","/")
for root,folders,files in os.walk(DIR):
    for file_name in files:
        # NOTE 找出大于 1 M的 gif 文件
        if not file_name.endswith(".gif"):
            continue
        
        file_path = os.path.join(root,file_name).replace("\\","/")
        subprocess.call(f'"{gifsicle}" -b --colors 256 -O3 {file_path}',shell=True)
        print(file_path)
        # raise RuntimeError