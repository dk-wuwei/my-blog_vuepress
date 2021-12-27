# 判断node_modules 是否存在 不存就下载依赖
if [ ! -d "./node_modules" ]; then
	echo "开始下载依赖"
	npm install || error_exit "依赖下载失败"
	echo "依赖下载成功"
fi

# 判断package.json文件有无改变，如果改变了需要执行npm install重新下载依赖
# 目标文件变量
package=./package.json

# 记录md5值的文件
md5=package_md5

# 创建新的md5信息
package_md5_new=$(md5sum -b $package | awk '{print $1}'|sed 's/ //g')

# 创建md5的函数
createMd5()
{
    echo $package_md5_new > $md5
}

# 判断记录md5值的文件是否存在
if [ ! -f $md5 ] ; then
    echo "md5file is not exist，create md5file......."
    createMd5
fi

# 读取旧的md5信息
package_md5_old=$(cat $md5|sed 's/ //g')

# 输出新值、旧值
echo "$package_md5_new ----- $package_md5_old"

# 对象对比判断
if [ "$package_md5_new" != "$package_md5_old" ]; then
    echo "文件发送了变化"
    createMd5
    echo "开始下载依赖"
    npm install || error_exit "依赖下载失败"
    echo "依赖下载成功"
fi

echo "开始打包"
npm run build

echo "gzip压缩打包后的文件"
tar -zcvf dist.tar.gz ./dist

echo "success!"