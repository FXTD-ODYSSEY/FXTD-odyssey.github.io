import os
import shutil

DIR = os.path.realpath(os.path.dirname(__file__))


folder_name = "_img_"
img_folder = os.path.join(DIR,folder_name)
if not os.path.exists(img_folder):
    raise RuntimeError("_img_ not exists")

for root,folders,files in os.walk(img_folder):
    for file_name in files:
        # NOTE 找出大于 1 M的 png jpg 文件
        # TODO 通过 tinyPNG 的 网站 压缩图片大小
        if not file_name.endswith(".png") and not file_name.endswith(".jpg"):
            continue
        
        folder,_,name = file_name.partition("_")
        
        source = os.path.join(root,file_name)
        img_name = os.path.join(DIR,folder,name)
        shutil.copyfile(source,img_name)
        # print(img_name)