# Git初级入门指南

标签（空格分隔）： ITCS WEB

---

## 初始Git
Git是目前世界上最先进的分布式版本控制系统。
## Git安装及配置
参考教程：
[Git安装与配置](http://blog.csdn.net/renfufei/article/details/41647875)

安装完成后，调出 Git Bash窗口进行简单配置：
```
$ git config --global user.name "Your Name" 
$ git config --global user.email "email@example.com" 
```
Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。
注意：`git config命令的--global`参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

注：路径`C:\Users\Administrator\.gitconfig`，打开可以查看配置的信息。此信息是可以被直接读取到的明码。

## Git常用命令
`git init`：把当前的目录变成可以管理的git仓库，生成隐藏的.git文件
`git add xx`：把xx文件添加到暂存区
`git status`：查看仓库状态。（红色代表文件在工作区，绿色代表文件在缓存区，灰色working directory clean 说明提交完成）
`git commit -m “xxx” a.txt` ：提交文件 -m后面的是注释

`cat xx`：查看xx文件内容
`vim xx`：编辑xx文件内容。出现弹窗口，按键盘"a"进入编辑模式，编辑完成`先ESC键退出 输入:wq! 退出编辑窗口`

`git log`：查看历史记录
`git reflog`：查看历史记录的版本号id


`git reset --hard HEAD^`：往上回退一个版本（几个^号就回退几个版本）
`git reset --hard HEAD~3`：往上回退三个版本
`git reset --hard 7位版本号`：直接穿梭到某版本

`git checkout -- xx`：把xx文件在工作区的修改全部撤销

`git branch xxx`：创建分支xxx
`git checkout -b dev`：创建dev分支 并切换到dev分支上
`git branch`：查看当前所有的分支
`git checkout dev/master`：切换回dev/master分支
`git checkout`：查看所有的分支


`git merge dev`：在当前分支合并dev分支

`git rm xx`：删除xx文件，之后要commit。直接`git commit -m “xxx”`
`git branch -d dev`：删除dev分支
`git branch -D dev`：强制删除dev分支

`mkdir XX`：创建一个空目录 XX指目录名
`pwd`：显示当前目录的路径
`touch xx`：新建xx文件文件


`git remote add origin`：`https://github.com/git账号/a.git` 关联一个远程库
`git push -u origin master`：把当前master分支推送到远程库（第一次要用-u以后不用）
`git clone https://github.com/xxxxx`：从远程库中克隆
`git push origin master`：git会把master分支推送到远程库对应的分支上
`git pull origin master`：git会把远程库的master分支拉到本地上

`git remote`：查看远程库信息
`git remote -v`：查看远程库的详细信息

`git diff`：查看不同
`git clean`：清屏

## 补充理解
### 工作区+版本库+暂存区
工作区（working Directory）：就是你电脑本地硬盘目录
版本库（Repository）：工作区有个隐藏目录.git，就是Git的本地版本库
暂存区（stage）：一般存放在“git目录”下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
Git为我们自动创建的第一个分支master，以及只想master的一个指针叫HEAD

### 提交行为
我们把文件往Git版本库里添加的时候，是分两步执行的：
第一步是用“git add”把文件纳入Git管理，实际是把本地文件修改添加到暂存区；
第二部使用“git commit”提交更改，实际上是把暂存区的所有内容提交到当前分支。

因为我们创建Git版本库时，Git自动为我们创建了唯一一个master分支，所以commit就是往master分支上提交更改。

可以简单的理解为，需要提交的文件修改统统放到暂存区，然后一次性提交暂存区的所有修改，一旦提交完成后，如果你又没有对工作区做什么修改，那么工作区就是“干净”的。即：nothing to commit（working directory clean）。

用`$ git diff HEAD -- filename` 命令可以查看工作区和暂存区里边 最新版本的区别。
新建过撤销未add：`git checkout -- 文件名`
撤销已add未commit：`先git reset HEAD 文件名，再 git checkout -- 文件名`
撤销已add已commit：`git reset –hard HEAD^`，即回退到上一个版本

## 关联 GitHub
Github是一个基于Git的代码托管平台。Git并不像SVN那样有一个中心服务器。目前我们使用到的Git命令都是在本地执行，如果你想通过Git分享你的代码或者其他开发人员配合。

### 关联Github账号
1、注册+检查.ssh秘钥：由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以我们需要配置验证信息（No such file or directory 表示第一次）；
2、创建SSH Key，在Git Bash 窗口输入`ssh-keygen -t rsa -C “email@example.com”`
成功的话会在~/下生成ssh文件夹，进去打开id_rsa.pub，复制里边的key；
3、测试连通性：在Git Bash 窗口输入:`ssh -T git@github.com`。

### 本地与 Github远程库

本地和github上的仓库进行关联
`$git remote add origin https://github.com/用户名/仓库名.git`
克隆Github某仓库到本地
`git clone https://github.com/xxxxx`
把本地库的内容推送到远程Github 
`git push origin master`，实际上是把当前分支master推送到远程






