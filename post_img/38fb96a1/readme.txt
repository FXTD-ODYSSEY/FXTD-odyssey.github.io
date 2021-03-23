================================================================================

                                     README

                       Autodesk FBX Python Bindings 2020
                       ----------------------------------


Welcome to the FBX Python Bindings readme! This document will guide you through
steps on how to generate the FBX Python SDK. 

For more information about the FBX, please visit us at http://www.autodesk.com/fbx/

To join the FBX Beta Program, please visit the Autodesk Feedback Community site
at http://beta.autodesk.com

Sincerely,
the Autodesk FBX team

================================================================================



TABLE OF CONTENTS
-----------------

    1. What Is The Purpose Of Package?
    2. Pre-Requisites
    3. How-to
    4. Step-by-step Linux Example
    5. Legal Disclaimer 



1. WHAT IS THE PURPOSE OF THIS PACKAGE?
---------------------------------------

The FBX Python Bindings allow developers to write the FBX Python SDK using
their desired Python interpreter and Riverbank's Sip. Autodesk provides a
pre-compiled version of the FBX Python SDK but only for a specific version
of the Python interpreter (see the FBX Python SDK package)


2. PRE-REQUISITES
------------------------------

To be able to compile the sources in this package, you must also install the
FBX SDK and you need to make sure that your system already has Sip (Linux system
usually provide it by default).

If your system does not provide Sip, you can download the Riverbanks Sip sources
(https://www.riverbankcomputing.com/software/sip/download/) and build it as a 
pre-step of the PythonBinding.py script (see the HOW-TO section).

A C++ compiler for your operating system will be required. For instance,
on Microsoft Windows, the PythonBinding.py script will assume that you are
working with Microsoft VisualStudio 2015. This can be changed by modifying the
"vcCompiler" and "vsCompiler" variables defined in the script.

Finally, the Python interpreter must be available on the build machine.


3. HOW-TO
-------------
     
3.1  Download the latest version of the FBX SDK and install it.

3.2  Define the FBXSDK_ROOT environment variable to the location of the
     installed FBX SDK from step 3.1
     (example: C:\Program Files\Autodesk\FBX\FBX SDK\2019.5)

3.3  Run the PythonBinding.py script with the desired options (you can just
     call the script without arguments to see the available options).

     note: you may have to edit the script file to add your version of the
     python interpreter. By the default, the script defines the 32 and 64 bits
     ucs2 and ucs4 flavors of Python 2.x and 3.x (depending on the build machine).
     
     The PythonBinding.py script will try to locate the sipconfig.py file
     in the Python's sites using the getsitepackages() and getusersitepackages()
     returned paths. If found, it assumes that Sip has been installed on your
     machine and that it can be located using the system paths.
     
     If you want to use a specific RiverBanks's Sip sources version. You have to:
        a) download and extract the package sources.
        b) define SIP_ROOT environment variable to the location of the extracted
           Sip sources.
        c) call the PythonBinding.py with the buildsip option
      
3.4  The resulting files will be located in "build/Distrib/site-packages/fbx".
     The fbx folder can then be, either moved inside Python's site-packages or,
     referenced using the PYTHONPATH environment variable (alternatively, by adding
     it into your python script using: sys.path.append()).

Remarks:

    - If you generated the FBX Python SDK using a pre-installed Sip, you need to
      tell Python where it can find the libfbxsdk library. You achieve this by
      adding this library path to LD_LIBRARY_PATH environment variable.

    - Autodesk official build of the FBX Python SDK is using Sip sources version
      4.19.3 because it is known that it correctly supports the '--sip-module'
      option and generates a private copy of sip named fbxsip. This fully qualified
      name does guarantee that there is not going to be conflicts with other sip
      modules in the system. Other versions of Sip sources, may fail to properly
      name the generated sip module. Therefore, if moving the content of
      "build/Distrib/site-packages/fbx", be careful that you do not overwrite other
      sip module files already present in your system.


4. STEP-BY_STEP LINUX EXAMPLE
------------------------------

    >cd /home/user
    >tar -xvf fbx20195_fbxsdk_linux.tar.gz
    >mkdir fbxsdk
    >./fbx20195_fbxsdk_linux ./fbxsdk
     answer the prompted questions and wait for the installation to complete
     
    >export FBXSDK_ROOT=/home/user/fbxsdk

    >tar -xvf fbx20195_fbxpythonbindings_linux.tar.gz
    >mkdir fbxpy
    >./fbx2015_fbxpythonbindings ./fbxpy
    answer the prompted questions and wait for the installation to complete
    
    >cd fbxpy
    >ls -l
        common
        compile
        configure.py
        FbxUtils.py
        License.txt
        PythonBindings.py
        readme.txt
        samples
        sip
      
    >python --version
    Python 2.7.5
    
    > python -c "import sys; print(sys.maxunicode)"
    1114111
    
    >python PythonBindings.py
     Syntax: PythonBindings.py module [buildsip] [test] [doc]
     
             modules = Python2_x86 | Python2_ucs4_x86 | Python2_x64 | 
                       Python2_ucs4_x64 | Python3_x86 | Python3_x64 | Python2_ub |
                       Python3_ub
                       
    >python PythonBindings.py Python2_ucs4_x64
    => SRC_PYTHON     : /home/user/fbxpy
    => SCRIPT_PATH    : /home/user/fbxpy
    => BUILD_PATH     : /home/user/fbxpy/build/Python27_ucs4_x64
    => SDK Headers    : ['/home/user/fbxsdk/include']
    => Machine Type   : x86_64
    => LIB_PATH       : ['/home/user/fbxsdk/lib/gcc/x64/release']
    => PLATFORM_TAG   : FBX_X64
    => Sipconfig Path : /usr/lib64/python2.7/site-packages
    =>
    
    => -=[ Build FBX Module ] =-
    =>
    => RUN COMMAND   : "/usr/bin/sip" -o -t FBX_X64 -c /home/user/fbxpy/build/Pyth
       on27_ucs4_x64 -b /home/user/fbxpy/build/Python27_ucs4_x64/fbx_module.sbf -I
       /home/user/fbxpy/sip /home/user/fbxpy/sip/fbx_module.sip
    => CURRENT DIR   : /home/user/fbxpy/build/Python27_ucs4_x64
    g++ -c -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions ....
    
    >cd /home/user/fbxpy/build/Distrib/site-packages/fbx
    >ls
    fbx.so
    FbxCommon.py

    >export LD_LIBRARY_PATH=/home/user/fbxsdk/lib/gcc/x64/release:$LD_LIBRARY_PATH
    >python
    >>> import sys
    >>> sys.path.append('/home/user/fbxpy/Distrib/site-packages/fbx')
    >>> import FbxCommon
    >>> (lSdkManager, lScene) = FbxCommon.InitializeSdkObjects()
    >>>
    
    
4. LEGAL DISCLAIMER
-------------------

Autodesk and FBX are registered trademarks or trademarks of Autodesk, Inc., in
the USA and/or other countries. All other brand names, product names, or trade-
marks belong to their respective holders.

                       Copyright (C) 2019 Autodesk, Inc.
                              All Rights Reserved

================================================================================
