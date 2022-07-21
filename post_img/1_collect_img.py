import os
import shutil

DIR = os.path.realpath(os.path.dirname(__file__))

folder_name = "_img_"
img_folder = os.path.join(DIR,folder_name)
if not os.path.exists(img_folder):
    os.mkdir(img_folder)

index = 0
folder_count = 1
for root,folders,files in os.walk(DIR):
    for file_name in files:
        # NOTE 找出大于 1 M的 png jpg 文件
        # TODO 通过 tinyPNG 的 网站 压缩图片大小
        if not file_name.endswith(".png") and not file_name.endswith(".jpg"):
            continue
        
        if folder_name in root:
            continue

        index += 1
        if index % 299 == 0:
            folder_count += 1
        
        file_path = os.path.join(root,file_name)
        # size = os.path.getsize(file_path)
        base = os.path.basename(os.path.realpath(root))

        _img_folder = os.path.join(img_folder,str(folder_count)) 
        if not os.path.exists(_img_folder):
            os.mkdir(_img_folder)
        file_copy = os.path.join(_img_folder,base + "_" + file_name)
        shutil.copyfile(file_path,file_copy)
                
        # if(size > 1000000):
        #     print(file_path,size)