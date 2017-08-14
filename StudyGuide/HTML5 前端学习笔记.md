# HTML5 前端学习笔记 

标签（空格分隔）： ITCS

---

##HTML简介
超文本标记语言（Hypertext Markup Language）
固定范式：

    <html>
        <head>
	        <title>网页的标题</title>
        </head>
        <body>
            <h1>这是我的第一个网页</h1>
        </body>
    </html>

###HTML注释
详见demo2例子

###HTML标签属性
        <!--
            属性：
            可以通过属性设置标签如何处理标签中的内容
            可以在开始标签中添加属性
            属性需要写在开始标签中，实际上就是一个明值对的结构
            属性名 = “属性值”，
            一个标签中可以同时设置多个属性，
            属性之间需要使用空格隔开
        -->
        <h1>
        这是我的<font color="red" size="7">第二个</font>网页
        </h1>
*备注：标签属性“文字、颜色、大小”属于表现形式，开发中使用的是CCS*
###HTML文档声明
html5的文档声明：声明当前网页的标准是按照HTML5的标准编写的，编写网页时一定要将html5的文档声明写在文档的最前边，如果不写文档声明，则会导致有些网页进入怪异模式，进入怪异模式会导致网页无法正常显示。

其形式为：

    <!DOCTYPE html>

###HTML进制的简介
二进制、十进制、十六进制、八进制
十六进制：1,2,3……，9，A,B,C,D,E,F（分别表示10/11/12/13/14/15）。
###乱码问题
乱码出现的原因：
1）计算机只认识两个东西 0和1；
2）在我们计算机中最终都需要转换为0 、1这种二进制编码来保存，包括网页的内容。
比如：中国，在计算机底层，可能需要转换为10100001011000011；在读取内容时，需要将二进制编码再转换为正确的内容。
编码：依据一定的规则，将字符转换为二进制编码的过程；
解码：依据一定的规则，将二进制编码转换为字符的过程；
字符集：编码和解码采用的规则，叫做字符集。
产生乱码的原因都是编码和解码的字符集不同
常见的字符集：ASCⅡ、ISO-8859-1、GBK、GB2312（中文系统的默认编码）、UTF-8（万国码）
ANSI 自动以系统的默认编码来保存文件
编码是使用的字符集为UTF-8，而在中文系统的浏览器中，默认都是使用GB2312进行解码的。

###常用的标签
标题标签h1~h6
段落标签

    <p>我是一个p标签，我用来表示一个段落</p>
换行标签br

    床前明月光，<br />
	疑是地上霜。<br />
	举头望明月，<br />
	低头思故乡。<br />

水平线标签hr

    <hr />
###实体
在HTML中，一些如< >这种特殊的字符是不能直接使用的，需要使用一些特殊的符号来显示这些字符，这些特殊符号我们称之为实体（转义字符串）
浏览器解析到实体时，会自动将实体转换为其对应的字符
	实体的语法：

    &实体的名字;

>  &gt;
<  &lt;
空格  &nbsp;
版权符号  &copy;
    
###图片标签
使用img标签来向网页中引入一个外部图片
img标签也是一个自结束标签
属性：
    src: 设置一个外部图片的路径
	alt: 可以用来设置在图片不能显示时，对图片的描述				            搜索引擎可以通过alt属性来识别不同的图片
		 如果不写alt属性，则搜素引擎不会对img中的图片进行收录
	width:可以用来修改图片宽度,单位一般使用px
	height:可以用来修改图片高度,单位一般使用px
	    宽度和高度两个属性如果只设置一个，则另一个也会同时等比例调整大小；
	    如果两个值同时指定则按照你指定的的值来设置；
	    一般开发中除了自适应的界面，不建议设置width和height。
	    
    <img src="2.gif" alt="当你老了" width="200px"  />
	
###相对路径
src属性配置的是图片的路径，目前我们所要使用的路径都是相对路径，
相对路径指和相对于当前资源所在目录的位置

    <img src="abc/2.gif" alt="当你老了"  />
可以使用../来返回上一级目录；返回几级目录就写几个../

    <img src="../2.gif" alt="当你老了"  />

###图片的格式
图片的格式
JPEG(JPG)
	-JPEG图片支持的颜色比较多，图片可以压缩，但是不支持透明
	- 一般使用JPEG来保存照片等颜色丰富的图片
GIF
	-GIF支持的颜色少，只支持简单（直线的透明、圆形不可以）的透明，支持动态图
	- 图片颜色单一或者是动态图可以使用GIF
PNG
	- PNG支持的颜色多，并且支持复杂的透明
	- 可以用来显示颜色复杂的透明的图片
					
图片的使用原则：
	效果不一致，使用效果好的；
	效果一致，使用小的；

*具体的使用在开发中要注意*

###meta标签

    <meta charset="utf-8" />

使用meta标签还可以用来设置网页的关键字

    <meta name="keywords" content="HTML5,JavaScirpt,前端,Java"/>

使用meta标签还可以用来指定网页的描述		搜索引擎在检索页面时，会同时检索页面的关键词和描述，但是这两个值不会影响页面在搜索引擎中的排名

    <meta name="description" content="发布h5、js等前端相关的信息"/>
    
使用meta标签可以用来做请求的重定向

    <meta http-equiv="refresh" content="秒数;url=目标路径、网址" />

    <meta http-equiv="refresh" content="5;url=http://www.baidu.com" />
    
###xHTML语法规范
1.HTML中不区分大小写<P></p>,但是我们一般都使用小写
2.HTML中的注释不能嵌套
3.HTML中的标签必须结构完整，要么成对出现，要么自结束标签
4.HTML中的标签可以嵌套，但是不能交叉嵌套
5.HTML标签中的属性必须有值，且值必须加引号（单双引号都可以）

###内联框架
使用內联框架可以引入一个外部的页面
使用iframe来创建一个内联框架
	属性：
    src：指向一个外部页面的路径，可以使用相对路径
	width:
	height：
	name :可以为内联框架指定一个name属性
在现实开发中不推荐使用内联框架，因为内联框架中的内容不会被搜索引擎所检索

    <iframe src="demo02.html"></iframe>
    
###超链接
使用超链接可以从一个页面跳转到另一个页面
使用a标签来创建一个超链接
属性：			     href:指向链接跳转的目标地址，可以写一个相对路径也可以写一个完整的地址

    <a href="http://www.baidu.com">我是一个超链接</a>
    
a标签中的target属性可以用来指定打开连接的位置
可选值：				  _self：表示在当前窗口打开（默认值）		_blank:表示在一个新的窗口中打开链接		可以设置一个内联框架的name属性值，链接将会在指定的内联框架中打开

    <a href="demo03.html" target="_self">我是一个超链接</a>

    <a href="https://www.douban.com/" target="_blank">我是一个超链接</a>
    
##CSS简介
CSS层叠样式表（Cascading Style Sheets）
CSS可以用来为网页创建样式表，通过样式表对网页进行装饰。
所谓层叠，可以将网页想象成一层一层的结构，层次高的会覆盖层次低的。
CSS可以分别为网页的各个层次设置样式。
###CSS样式
1.可以将CSS样式编写到元素的style属性当中
将样式直接编写到style的属性中，这样的样式我们称之为内联样式
内联样式只对当前的元素中的内容起作用，内联样式不方便重复使用
内联样式属于结构和表现耦合，不方便后期的维护，不推荐使用

    <p style="color:red;font-size:40px;">锄禾日当午，汗滴禾下土</p>
    
2.也可以将CSS样式编写到head中的style标签里
将样式表编写到style标签中，然后通过CSS选择器选中指定元素
然后可以同时为这些元素一起设置样式，这样可以使样式进一步的复用
将样式表编写到style标签中，可以使变现和结构进一步分离，这也是我们推荐的使用方式

    <style type="text/css">
		 p{
		 color:red;
		 font-size:40px;
		 }
	     </style>



###外部样式表
**最推荐使用的**
3.还可以将CSS样式编写到外部的文件中，然后通过link标签将外部的CSS文件引入到当前的界面中，这样外部文件中的CSS样式就会应用到当前界面中
将css样式统一编写到外部的样式表中，完全使结构和表现分离，可以使我们的样式表在不同的页面中使用，
最大限度的使样式可以进行复用，将样式统一写在样式表中，然后通过link标签引入，
可以利用浏览器的缓存加快用户访问的速度，提高了用户体验。所以在开发中最推荐使用的就是外部的CSS文件。

    <link rel="stylesheet" type="text/css" href="style.css"/>
    
###CSS的语法
CSS的注释，作用和HTML注释类似，只不过它必须编写在style标签中，或者是CSS文件中。
形式为  /* */

CSS语法：
	选择器 
— 通过选择器可以选中页面中指定的元素（元素就是指标签），并且将整个声明块样式应用到选择器对应的元素上
	声明块
— 声明块紧跟着选择器的后边，使用一对{}括起来；                —声明块中实际上就是一组一组的名值对结构； 这一组一组的名值对我们称之为声明，
在一个声明块可以写多个声明，多个声明之间用;隔开，				        声明的样式名和样式值之间使用:来连接。

    <style type="text/css">
    	p{
		     color:red;
		     font-size:40px;
		 }
	</style>

###hbuilder安装
IDE集成开发工具

**Hbuilder**
快捷方式：
html标准文本：!+Tab
路径：alt+/(还具备提示功能)
删除一行：Ctrl+D
复制一行：Ctrl+shit+R
换行：Ctrl+回车
注释：Ctrl+shit+/
代码上下移动：Ctrl+上下方向键

向左缩进 tab
向右缩进  按着shift + tab

快捷键可以查看帮助，在标题栏！！！

###内联和块元素
**div就是一个块元素，**
所谓的块元素就是会独占一行的元素，无论它的内容多少都会独占一整行。
常见的块元素：p h1 h2 h3 ……
div这个便签没有任何语义，就是一个纯粹的块元素，
并且不会为它里面的元素设置任何的默认样式
div元素主要用来对页面进行布局的
        	    
**span是一个内联元素（行内元素）**
所谓的行内元素，指的是只占自身大小，不会占用一行
常见的内联元素：a img iframe span
span没有任何的意义，span标签专门用来选中文字，然后为文字设置样式
        	    
块元素主要用来做页面中的布局，内联元素主要用来选中文本设置样式
一般情况下只使用块元素去包含内联元素，而不会反过来的内联元素包含块元素

a元素可以包含任意元素，但是除了a它自己。
p元素不可以包含任何块元素。

    <a href="#">
        <div style="background-color: red;width: 200px;">我是一个div</div>
        </a>
        
        <div style="background-color: green;width: 200px;">我是一个div</div>
     
span

    <span>我是一个span内联元素</span>

###常用选择器
**元素选择器**
作用：通过元素选择器可以选择页面中的所有指定元素
语法：标签名{}

    h1{
		color: green;
	}
	p{
		color: red;
	}

**id选择器**
通过元素的id属性值选中唯一的一个元素
语法：#id属性值{}
 

    #p1{
		font-size: 20px;
	}

**类选择器**
通过元素的class属性值选中一组元素
语法：.class属性值{}

    .p2{
		color: green;
	}
			
	.hello{
		font-size: 30px;
	}

**并集选择器**
通过选择器分组可以同时选中多个选择器对应的元素
语法：选择器1，选择器2，选择器N{}

    #p1,.p2,h1{
		background: yellow;
	}
	
**通配选择器**
可以用来选中页面中的所有的元素
语法：*{}

    *{
		 color: purple;
	}
**复合选择器（交集选择器）**
作用：可以选中同时满足多个选择器的元素
语法：选择器1选择器2选择器N{}
对于id选择器来说，不建议使用复合选择器

    span.p3{
		 background: blue;
	}

###子元素和后代元素选择器
*元素之间的关系*
父元素：直接包含子元素的元素
子元素：直接被父元素包含的元素
祖先元素：直接或间接包含后代元素的元素，父元素也是子元素
后代元素：直接或间接被祖先元素包含的元素，字元素也是后代元素
兄弟元素：拥有相同父元素的元素叫做兄弟元素 

**后代元素选择器**
作用：选中指定元素的指定后代元素
语法：祖先元素 后代元素（两者之间一个空格）

    div span{
		color: green;
	}
	
**子元素选择器**
作用：选中指定父元素的指定子元素
语法：父元素 >子元素

    div > span{
		background-color: red;
	}
###选择器练习
*一个小练习*

###伪类选择器
伪类专门表示元素的一种特殊的状态
比如：访问过的超链接，比如普通的超链接、比如获取焦点的文本框
当我们需要为处在这些特殊状态的元素设置样式时，就可以使用伪类

* 有四种伪类可以让你根据访问者与该链接的交互方式，将连接设置为4种不同的状态
*  语法：
- **正常的链接**：a:link
- **访问过的的链接**：a:visited (只能定义字体的颜色)
- **鼠标滑过的链接**：a:hover
- **正在点击的链接**：a:active

*浏览器是通过历史记录来判断一个链接是否访问的，
由于涉及用户隐私问题，所以使用visited伪类只能设置字体的颜色*

    a:link{
		color: yellowgreen;
	}
			
	a:visited{
		color: red;
	}
	
	a:hover{
		color: blue;
	}
	
	a:active{
		color: brown;
	}
	
**获取焦点**
对于文本框获取焦点后，修改背景颜色为浅蓝色

    input:focus{
		background-color: cadetblue;
	}
    
**选中内容**
为p标签中选中的内容使用样式
可以使用::selectio伪类
火狐浏览器专用的 ::-moz-section


	/*兼容大多数浏览器*/		
	p::selection{
		background-color: pink;
	}
	
	/*兼容火狐浏览器*/
	p::-moz-selection{
		background-color: pink;
	}

###伪元素
使用伪元素来表示元素中的一些特殊位置
 - **:first-letter** 为第一个字符来设置一个特殊的格式
 - **:first-line**   为段落的第一行来设置一个特殊的格式

    p:first-letter{
		font-size: 50px;
		color: red;
	}
			
	p:first-line{
		color: purple;
	}
	
- **:before** 表示元素最前边的部分
- **:after** 表示元素的最后边的部分
一般给before都需要结合content这个样式一起使用，
通过content可以向before或者after的位置添加一些内容

    	p:before{
		    content: "我想站在高高的山峰";
		 	color: orange;
		}
		
		p:after{
		 	content: "——逃跑计划";
		 	color: green;
		}
		
###属性选择器
作用 ：可以根据元素中的属性或属性值来选取指定的元素
语法：
* [属性名] 选取含有指定属性的元素
* [属性名="属性值"] 选取含有指定属性值的元素
* [属性名^="属性值"] 选取属性值以指定内容开头的元素
* [属性名$="属性值"] 选取属性值以指定内容结尾的元素
* [属性名*="属性值"] 选取属性值包含指定内容的元素

    p[title]{
		background-color: yellow;
	}
			
	p[title="hello"]{
		background-color: red;
	}
			
	p[title^="ab"]{
		background-color: green;
	}
			
	p[title$="c"]{
		background-color: blue;
	}
			
	p[title*="c"]{
		background-color: pink;
	}
	
	
###子元素选择器伪类

**:first-child**    可以选中第一个子元素
**:last-child**     可以选中最后一个子元素
**:nth-child（）**   可以选中任意位置的子元素。该选择器后边可以指定一个参数，指定要选中的第几个子元素
    even表示偶数位置的子元素；odd表示奇数位置的子元素 

**:first-of-type**  可以选中当前类型的元素排列的第一个子元素
**:last-of-type**   可以选中当前类型的元素排列的最后一个子元素
**:nth-of-type（）**   可以选中当前类型的元素排列的任意位置的子元素 

和:first-child这些非常的类似，只不过child是在所有的子元素中排列；type是在当前类型的子元素排列

    p:first-child{
		background-color: yellow;
	}

	p:last-child{
		background-color: green;
	}

	p:nth-child(5){
		background-color: purple;
	}

	p:nth-child(even){
		background-color: pink;
	}

	p:nth-child(odd){
		background-color: blue;
	}
			
	p:first-of-type{
	    background-color: yellow;
	}
	
###兄弟元素选择器

    	 * 后一个兄弟元素选择器
		 *     作用：可以选中一个元素紧挨着的指定的兄弟元素
		 *     语法： 前一个 + 后一个
		 * 
		 * 选中后所有的兄弟元素
		 *     作用：可以选中一个元素后边所有的指定的兄弟元素
		 *     语法： 前一个 ~ 后一个
		 */
			
		span + p{
			background-color: red;
		}
				
		span ~ p{
			background-color: blue;
		}

###否定伪类选择器
否定伪类
— 作用：可以从已选中的元素中去除某些元素
— 语法： :not(.属性值)

        p:not(.hello){
			background-color: green;
	    }
	    
###样式的继承
像儿子可以继承父亲的遗产一样，在css中，祖先元素上的样式，也会被它的后代所继承

利用继承，可以将一些基本的样式设置给祖先元素，这样所有的后代元素将会自动继承这些样式
但并不是所有的样式都会被子元素所继承，比如：背景相关的样式就都不会被继承  边框相关的样式、定位相关的样式都不会。

###选择器的优先级

    
	* 当使用不同的选择器，选中同一个元素时并且设置相同的样式时，
	* 这时样式之间产生了冲突，最终到底采用哪种选择器样式，由选择器的优先级（权重）决定，优先级高的优先显示。
	* 优先级的规则
		*     内联样式，优先级1000
		*     id选择器，优先级100
		*     类和伪类选择器，优先级10
		*     元素选择器，优先级1
		*     通配选择器（*），优先级0
		*     继承的样式，没有优先级
		* 
    * 当选择器中包含多种选择器时，需要将多种选择器的优先级相加在比较；
    *     但是注意，选择器的优先级计算不会超过最大数量级
	* 如果选择器优先级一样，则使用靠后的样式
	* 
	* 并集选择器的优先级是单独计算的    div，p, #p1 .hello()
	* 
	* 可以在样式的最后，添加一个！important，则此时该样式将会获得一个最高的优先级，
	* 将会优先于所有的样式显示甚至超过内联样式，但是在开发中尽量避免使用！important
	* 
	
			
	*{
		font-size: 50px;
	}
			
	p{
		font-size: 30px;
	}
			
	p#p2{
		background-color: red;
	}
			
	.p1{
		color: yellow;
	}

	.p3{
		color: green;
	}

###伪类的顺序
涉及到a的伪类一共四种，而这四个：
a:link
a:visited
a:hover
a:active
而这四个选择器的优先级是一样的。但他们顺序一般是按照如上的顺序进行的。

###文本标签
**em和strong**
这两个标签都表示一个强调的内容，
em 主要是语气上的强调，在浏览器中默认使用斜体显示
strong 主要是内容的强调，在浏览器中默认使用粗体显示

    <p>
        今天天气<em>真不错</em>！
    </p>
        
    <p>
        <strong>注意如果你不认真听课，就有可能找不到好工作。</strong>
    </p>
    
**b和i标签**
i标签中的内容会以斜体显示
b标签中的内容会以粗体显示
        	
h5规范中规定，对于不需要着重的内容而是单纯的加粗或者是斜体，就可以使用b和i标签

    <p>
        <i>我是i标签中的内容</i><br />
        <b>我是b标签中的内容</b>
    </p>

**small标签**
small标签中的内容会比它的父元素中的文字要小一些
在h5中使用small标签来表示一些细则类的内容
比如：合同中的小字，网站的版权声明都可以放到small
    
    <p>
        我是p标签中的内容<small>我是small标签中的内容</small>
    </p>
    
**cite标签**
网页中所有的加书名号的内容都可以使用cite标签，表示的参考内容
比如：书名、歌名、话剧名、电影名……

    <p>
        <cite>《论语》</cite>是我最喜欢的一本书
    </p>
    
**q标签和blockquote标签**
q标签表示一个短的引用（行内引用）
q标签引用的内容，浏览器会默认自动加上引号
比如：名人名言等
        	
blockquote标签表示一个长的引用（块），会独占一行

    <p>
        子曰：<q>学而时习之不亦说乎！</q>
    </p>
        
    <div>
        子曰：<blockquote>有朋自远方来，学而时习之不亦说乎！</blockquote>
    </div> 
    
**sup标签和sub标签**
sup:使用sup标签设置一个上标显示
sub:使用sub标签设置一个下标显示


    <p>2<sup>2</sup></p>
    <p>赵薇<sup><a href="#">[1]</sup></p>

    <p>
        H<sub>2</sub>O
    </p>
    
**del标签和ins标签**   
使用del标签来表示一个删除的内容
del标签中的内容，会自动添加一个删除线

    <p>
        <del>17.75</del> <br />
        15.45 <br />
    </p> 

  ins标签表示一个插入的内容
  ins标签中的内容，会自动添加下划线
  

    <p>
        我们的老师真<ins>绅士</ins>！
    </p> 
               
**pre和code标签**
需要在网页中直接编写一些代码
pre是一个预格式标签，会将代码中格式保存，不会忽略多个空格
code专门用来表示代码的语义化标签，不会保留格式
我们一般结合使用pre和code来表示一段代码
    
    <pre>
        <code>
        	window.onload = function(){
        	       alert("Hello World!");
        	 } 
        </code>      	
    </pre>
    
###无序列表和有序列表

    <!--
    列表相当于去超市购物时的那个购物清单
    在HTML中也可以创建列表，在网页中一共有三种列表：
        1.无序列表：
        	- 使用ul标签来创建一个无序列表
        	- 使用li在ul中创建一个个列表项
        	- 一个li就是一个列表项，
        	             
        	通过type可以修改无序列表的项目符号
        	- 可选值：
        	    - disc:默认值，实心的圆点
        	    - square，实心的方块
        	    - circle，空心的圆圈
        	            
    注意：默认的项目符号我们一般都不使用！！！
    如果需要设置项目符号，则可以采用为li设置背景图片的方式来设置
        	    
    ul和li都是块元素
        	            
        2.有序列表：
    跟无序列表类似，只不过它使用ol来代替ul，其它一致。
        - 有序列表使用有序的符号作为项目符号；
        - type属性，可以指定序号的类型
        	  可选值：1，默认值，使用阿拉伯数字
        	          a/A  采用小写或大写字母作为序号
        	          i/I  采用小写或大写罗马数字作为序号
 
     ol是块元素
        	    
       3.定义列表：
       
        -->
        
范例

    <ul>
        <!--<ul  type="square">-->
        	<li>我爱吕利利</li>
        	<li>我想吕利利</li>
        	<li>我你吕利利</li>
        	<li>我爱吕利利</li>
        	<li>我爱吕利利</li>
        </ul>
        
        <ol>
        <!--<ol type="A">-->
        	<li>结构</li>
        	<li>表现</li>
        	<li>行为</li>
        </ol>
        
        <!--
        	列表之间是可以相互嵌套，可以在无序列表中放入有序列表，也可以在有序列表中放一个无序列表
        -->
        <p>菜谱</p>
        <ul>
        	<li>
        		鱼香肉丝
        		<ol>
        			<li>鱼</li>
        			<li>香</li>
        			<li>肉丝</li>
        		</ol>
        	</li>
        	<li>
        		宫保鸡丁
        		<ul>
        			<li>宫保</li>
        			<li>鸡丁</li>
        		</ul>
        	</li>
        	<li>鱼番茄鸡蛋</li>
        </ul>

列表之间是可以相互嵌套，可以在无序列表中放入有序列表，也可以在有序列表中放一个无序列表。
如果想要取消默认的项目符号，则在head进行设置

    <style type="text/css">
		/*
		* 去掉项目符号
		*/
		ul{
			list-style: none;
		}
		</style>

###定义列表
定义类表用来对一些词汇或内容进行定义

使用dl来创建一个定义列表
dl中有两个子标签
    - dt:被定义的内容
    - dd:对定义的内容进行描述
        	     
dl、ul、ol之间都可以相互嵌套

    <dl>
        <dt>武松</dt>
        <dd>景阳冈打虎英雄，战斗力99</dd>
        <dd>打死西门庆，投奔梁山</dd>
        <dt>武大</dt>
        <dd>著名餐饮企业家，战斗力0</dd>        	
    </dl>
    
###长度单位

*     **像素px**
    - 像素是在网页中使用最多的单位,
    - 一个像素就相当于屏幕中的一个点
    - 我们的屏幕其实是有像素点构成的,但是这些像素点是不能直接看到的；		
    - 不同显示器一个像素的大小也不相同;像是效果越好,像素点越小,反之像素越大
    
* **百分比%**
	- 也可以将单位设置成百分比%的形式
	- 这样浏览器将会根据其父元素的样式来计算该值
	- 使用百分比%的好处，当我们的父元素属性值发生变化时，子元素也会按照比例发生改变
	- 在创建一个自适应的页面时，经常使用百分比作为单位
			            
* **em**
	- em和百分比类似，它是相对于当前元素的字体大小来计算的
	- 1em = 1 font-size
	- 使用em时，当字体大小发生改变时，em也会随之改变
	- 设置字体相关的样式时，经常会使用em  


###颜色的单位
十六进制RGB值  表示颜色

	/*
	* 颜色单位：
	* 在css中可以直接使用颜色的单词来表示不同的颜色。红色red、绿色green、蓝色blue
	* 
	* 也可以使用RGB值来表示不同的颜色
	*  - 所谓的RGB值指的是通过Red、Green、Blue三原色
	*  - 通过这三种颜色的不同浓度，来表示不同的颜色
	*  - 如：RGB(红色的浓度、绿色的浓度、蓝色的浓度)；
	*  - 颜色的浓度需要一个0-255之间的值，255表示最大、0最小；
	*  - 浓度也可以采用百分比来设置，需要一个0%~100%之间的数字
	
    *   使用的百分比也会转换成0-255之间的浓度数值（0%表示0，100%表示255）
	* 
	*  也可以使用十六进制的RGB值来表示颜色，原理和上边的rgb原理一样
	*  只不过使用十六进制来代替，使用三组两位的十六进制数组来表示一个颜色，
	*   每组表示一个颜色。第一组表示红色的浓度，范围00-ff
	*                   第二组表示绿色的浓度，范围00-ff
	*                   第三组表示蓝色的浓度，范围00-ff
	*   语法：#红色绿色蓝色
	*            十六进制：0 1 2 3 4 5 6 7 8 9 A B C D E F
	*             00 - ff
	*             00表示没有，相当于rgb中的0
	*             00表示没有，相当于rgb中的255
	*   红色：#ff0000 
	*   像这种两位重复的颜色，可以简写
	*   比如：红色#ff0000 可以简写成#f00
	*    #abc  相当于#aabbcc*
	*/
例子：

    background-color:rgb(161,187,215);
			
	background-color:rgb(100%,50%,50%);
			
	background-color: #ff0000;
			
	background-color: #abc; /*#aabbcc*/

###字体的样式
* 设置字体颜色，使用color来设置字体颜色

* 设置文字大小，使用font-size来设置（浏览器中字体默认使用大小是16px） 
font-size设置的并不是文字本身的大小，在页面中每个字都处在一个看不见的框中
我们设置font-size实际上设置的是格的高度，并不是文字的大小
一般情况下，文字要比格要小一些的，有时候也会比格大
根据字体的不同，显示效果也不同

* 设置文字的字体:font-family
当采用某种文字时，如果浏览器支持该字体则使用该字体，如果不支持则使用默认字体；
	* 该样式可以同时指定多个字体，多个字体之间用,隔开 
	* 当采用多个字体时，浏览器会优先使用前边的字体
	* 如果前边没有再尝试下一个 
	* 浏览器使用的字体默认是计算机使用的字体；如果计算机有就用，反之不用

在开发中，如果字体太奇怪或者使用太少，尽量不用（有可能用户电脑中没有，会无法显示）

    color: red;
	font-size: 30px;
	font-family: 华文彩云;
	/*font-family: arial,微软雅黑;*/
	
###颜色单位/RGB值
前边颜色已经说明

###字体的分类
serif(衬线字体)
sans-serif(非衬线字体)
monospace(等宽字体)
cursive(草书字体)
fantasy(虚幻字体)

可以将字体设置为这些大类，当设置为大类以后，浏览器会自动选择指定的样式并应用样式
一般会将字体的大分类，指定为font-family中的最后一个字体兜底
开发中主要采用的都是monospace(等宽字体)

    <p style="font-size: 50px;font-family: serif;">衬线字体：我是p标签，ABCDEFGabcdefg</p>
    <p style="font-size: 50px;font-family: sans-serif;">非衬线字体：我是p标签，ABCDEFGabcdefg</p>
    <p style="font-size: 50px;font-family: monospace;">等宽字体：我是p标签，IHABCDEFGabcdefg</p>
    <p style="font-size: 50px;font-family: cursive;">草书字体：我是p标签，ABCDEFGabcdefg</p>
    <p style="font-size: 50px;font-family: fantasy;">虚幻字体：我是p标签，ABCDEFGabcdefg</p>
    
    <style type="text/css">
		p{
		font-family: arial,微软雅黑,华文彩云,serif;
		}
	</style>
	
###字体的其它样式
**font-style**  可用来设置字体的斜体
 - 可选值：
normal  默认值，标准的字体显示
italic  文字会以斜体显示
oblique 文字会以倾斜显示
inherit 规定应该从父元素继承字体样式。
- 大部分浏览器都不会对倾斜和斜体做区分
也就是说我们设置italic和oblique，它们的效果往往是一样的
一般只会使用 italic

**font-weight**可用来设置字体的粗细
 - 可选值：
normal  默认值，标准的字体显示
bold    文字会加粗显示
该样式也可以指定100~900这九个值，
但是由于用户的计算机往往由于没有这么多的级别字体，来达到我们想要的效果。也就是200有可能比100粗，也有可能是一样的；
bolder更粗、 lighter更细也可能没有用途

**font-variant**可用来设置小型大写字母
- 可选值：
normal  默认值，标准的字体显示
small-caps  文本以小型大写字母显示
小型大写字母：
将所有的字母都以大写形式显示，但小写字母的大写，要比大写字母的大小小一些

    .p2{
			/*设置一个文字大小*/
		font-size: 30px;
			/*设置一个字体*/				
		font-family: 华文彩云;
			/*设置文字斜体*/				
		font-style: italic;
			/*设置文字的加粗*/				
		font-weight: bold;
			/*设置一个小型大写字母*/				
		font-variant: small-caps;
	    }
	    
**font**
在css中还为我们提供了一个样式font，
使用该样式可以设置字体相关的所有样式
可将字体的样式的值，统一写在font样式中，不同的值之间用空格隔开
* 
**使用font设置字体样式时，斜体、加粗、小大字母，没有顺序要求，甚至可以不写，如果不写则使用默认值，**
但是要求文字的大小和字体必须写，而且**字体必须是最后一个样式**，**字体大小在倒数第二个**
实际上使用简写属性也会有一个比较好的性能，方便浏览器解析识别

    .p3{
		font: italic small-caps bold 60px "微软雅黑";
	   }
	   
###字体的行间距
在css中並沒有提供一个直接设置行间距的方式
我们只能通过设置行高来间接的设置行间距，行高越大行间距越大
使用**line-height**来设置行高
行高类似于上学用的单线本，单线本是一行一行的，线与线之间的距离就是行高；
网页中的文字实际上也是写在一个看不见的线中的，而文字会默认在行高中垂直居中显示

行间距 = 行高 - 字体大小

通过设置line-height可以间接的设置行高，
可以接受的值：
	- 1.直接接收一个大小；如30px
	- 2.可以指定一个百分数，则会相对于字体去计算行高
	- 3.可以直接传一个数值，则行高会设置字体大小相应的倍数

	.p1{
		font-size: 20px;
		line-height: 30px;
		line-height: 150%;
		line-height: 2;
	}

对于单行文本而言，可将行高设置为和父元素的高度一致，
这样可以使单行文本在父元素中垂直居中

	.box{
		width: 200px;
		height: 200px;
		background-color: #bfa;
	
		line-height: 200px;			
	}
	
在font中也可以指定行高
在字体后可以添加/行高，来指定行高，该值是可选的，如果不指定则会使用默认值

	.p2{
		line-height: 50px;
		/*
		* 在font中也可以指定行高
		* 在字体后可以添加/行高，来指定行高，该值是可选的，如果不指定则会使用默认值
		*/

		/*font: 30px "微软雅黑";*/
		font: 30px/50px "微软雅黑";
	}
	
###文本样式
**text-transform**可以用来设置文本的大小写
可选值：
-  none 默认值，该怎么显示就怎么显示，不做任何处理
-  capitalize 单词首字母大写，通过空格来识别单词
-  uppercase  所有的字母都大写
-  lowercase   所有的字母都小写

    .p1{
		text-transform: lowercase;
	}
	
**text-decoration**可以用来设置文本的修饰
可选值：
- none 默认值，不添加修饰，正常显示
- underline 为文本添加下划线
- overline 为文本添加上划线
- line-through  为文本添加删除线

    .p2{
		text-decoration: line-through;
	}
	
	
    a{
		/*
	* 超链接会默认添加下划线，也就是超链接的text-decoration的默认值为underline
	* 如果需要去除超链接的下划线，则需超链接的text-decoration将该样式改为none.
		 */
		text-decoration: none;
	}

**字符间距和单词间距**
字符间距letter-spacing  可以指定字符间距
单词间距word-spacing 可以设置单词之间的距离，实际上就是设置词与词之间空格的大小

    .p3{
		letter-spacing: 5px;
		word-spacing: 100px;
	}

**text-align**可以用来设置文本的对齐方式
可选值：
- left 左对齐，默认值
- right 右对齐
- justify 两边对齐
- center 居中对齐---通过调整文本之间空格的大小，来达到两端对齐的效果

    .p4{
		text-align: right;
	}
	
**text-indent**可以用来设置首行缩进
该样式需要指定一个长度，并且只对第一行有效。
- 当给它一个正值时，会自动向右侧缩进指定的像素；
- 当给它一个负值时，会自动向左侧缩进指定的像素；
-     通过这种方式可以将一些不想显示的文字隐藏起来。

    .p5{
		text-indent: 50px;
		text-indent: 2em;/*表示首行缩进两个字符*/
	}
	
##盒子模型
###盒子模型简介
一个盒子分为几个部分：
- 内容区（content）
- 内边距（padding）
- 边框（border）
- 外边距（margin）

###盒子模型
为元素设置
使用width来设置盒子内容区的宽度
使用height来设置盒子内容区的高度
width和height只是设置盒子的内容区的大小，而不是盒子的整个大小
- 盒子可见框的大小由内容区、内边距和边框共同决定

**为元素设置边框**
要为元素设置边框必须指定三个样式，缺一不可
-  **border-width**:边框的宽度
-  **border-color**:边框的颜色
-  **border-style**:边框的样式

使用border-width可以分别指定四个边框的宽度，
--- 如果在border-width指定了四个值，则四个值会分别设置给 “上、右、下、左”，按照顺时针方向设置的
--- 如果指定三个值，三个值分别设置给 “上 右左 下”
---如果指定两个值，两个值分别设置给 “上下  右左”
---如果指定一个值，一个值分别设置给 “上下右左”

除了border-width外，CSS中还提供了四个 border-XXX-width,XXX的值可能是top、right、bottom、left，对应设置“上、右、下、左”四个边
!!!!!这个规则也适用于border-color、border-style

设置边框样式border-style可选值：
-   none：默认值，没有边框
-   solid：实线
-   dashed：虚线
-   dotted：点状边框
-   double：双线边框

    .box1{
		width: 200px;
		height: 200px;
				
		/*设置背景颜色*/
		background-color: #bfa;
			
		border-width: 10px 20px 30px 40px;
		border-bottom-width: 50px;
		border-color: blue;				
		border-style: double;		
	    }
	    
	    
###盒子的边框的简写属性
设置边框
大部分浏览器中，边框的宽度和颜色都是有默认值的，而边框的样式的默认值都是none。

简写属性border
- 边框的简写样式,通过它可以同时设置四个边框的样式，
- 而且没有任何顺序的要求
- border同时指定的是四个边，不可以分别指定

border-XXX，可以单独指定四个边的样式，只对一个边生效。
XXX的值可能是top、right、bottom、left，对应设置“上、右、下、左”四个边

    .box1{
		border: 10px red dotted;		
	}

###边框内边距
内间距（padding），盒子内容区与四个边框的距离
* 一共有四个方向的间距，可以通过：
* padding-top 上内间距
* padding-right 右内间距
* padding-bottom 下内间距
* padding-left	左内间距	
来设置四个方向的内间距

内间距会影响盒子的可见框的大小，元素的背景颜色会延伸到内边框	
盒子的大小由内容区、内间距和边框共同决定
盒子的可见宽度 = border-left-width  + padding-left + width + border-right-width + padding-right
盒子的可见高度 = border-top-width  + padding-top + width + border-bottom-width + padding-bottom

    .box1{
        padding-top: 100px;
		padding-right: 100px;
		padding-bottom: 100px;
		padding-left: 100px;
	}

使用padding可以同时设置四个边框样式，规则和border-width一致。

    .box1{
        padding: 100px;
	}
	
###盒子外边距
**外间距（margin）**，指盒子与其他盒子之间的距离
它不会影响可见框的大小，只会影响到盒子的位置。
一共有四个方向的间距，可以通过：
* margin-top 上外间距
* margin-right 右外间距
* margin-bottom 下外间距
* margin-left	左外间距	

用来设置四个方向的外间距
！！！由于页面中的元素都是靠左靠上摆放的，所以注意当我们设置盒子上和左外边距时，会导致盒子自身的位置发生改变；而如果是设置右和下外边距时，会改变其它盒子的位置。

外边距也可以指定为一为负值，
如果外边距设置的是负值，则元素会向反方向移动
    
		margin-top: 100px;
		margin-right: -100px;
		margin-bottom: -100px;
		margin-left: -100px;
			
	
margin还可以设置为auto，auto一般只设置给水平方向的（left/right）
如果只指定左边距或右边距的margin为auto 则会将外边距设置为最大值
垂直方向外边距如果设置为auto，则外边距默认为0

如果将left和right同时设置为auto，则会将两侧的外边距设置为相同的值
就可以使元素自动在父元素中居中，所以我们经常将左右外边距设置为auto，以使子元素在父元素中水平居中	

        margin-left: auto;
		margin-right: auto;
	
也可以使用margin可以同时设置四个边框样式，规则和border-width、padding一致。	
	
		margin: 50px;

###垂直外边距的重叠
在网页中垂直方向上的相邻的垂直方向上的外边距会发生外边距的重叠(关键：垂直方向上的 、相邻的)
所谓的外边距重叠指的是兄弟元素之间的相邻外边距会取最大值而不是取和；
如果父子元素的垂直边距相邻了，则子元素的外边距也会设置给父元素。

外边距的重叠比较灵活，经验积累

    .box1{
		width: 100px;
		height: 100px;
		background-color:red;
		/*
		* 为box1元素设置一个下边距
		*/
		margin-bottom: 100px;		
	}
		
	.box2{
		width: 100px;
		height: 100px;
		background-color:green;
		/*
		* 为box2元素设置一个上边距
		*/			
		margin-top: 100px;		
	}
		
	.box3{
		width: 200px;
		height: 200px;
		background-color:yellow;
		/*为box3设置一个上边框*/	
		/*border-top: 1px red dotted;
		padding-top: 1px*/
			
		padding-top: 100px;
	}
		
	.box4{
		width: 100px;
		height: 100px;
		background-color:yellowgreen;
		/*
		* 为box4元素设置一个上边距
		*/
		margin-top: 100px;					
	}

###浏览器默认样式
浏览器为了在页面中没有样式时，也可以有一个较好的显示效果，
所以为了很多的元素都设置了一些默认的margin和padding，
而它的这些默认样式，正常情况下我们都是不需要使用的。
所以我们往往在编写样式之前需要将浏览器中默认的margin和padding统统去掉
例如：

    body{
		margin: 0;
	}
		
	p{
		margin: 0;
	}
		
	ul{
		margin: 0;
		padding: 0;
	}
	
清除浏览器的默认样式
选用通配选择器（*），可以直接去掉所有的默认的margin和padding格式

    *{
		margin: 0;
		padding: 0;
	}
	
###内联元素的盒模型
包含：内容区、内边距、边框、外边距

**内容区**：内联元素不能设置width和height；
**内边距**：
设置水平内边距，内联元素可以设置水平方向上的内边距；
设置垂直方向上的内边距，内联元素可以设置垂直方向上的内边距，但不会影响页面的布局；
**边框**
内联的元素可以设置边框，但是垂直的边框不会影响到页面的布局
**外边距**
内联元素支持设置水平方向上的内边距，水平方向上相邻的外边距不会重叠，而是求和；
不支持垂直方向上的外边距设置。

###display和visibility

display
将一个内联元素变成块元素
通过display样式可以修改元素的类型
- 可选值：
inline: 可以将一个元素作为内联元素显示；

block：可以将一个元素设置为块元素显示；

inline-block：可以将一个元素转换为行内块元素显示。(可以使一个元素既有行内元素的特点又有块元素的特点；既可以设置宽高，又不会独占一行，相当于img标签)；

none ：不显示元素，并且元素不会在页面中继续占有位置。
用该方式隐藏的元素，不会在页面中显示，并且不在占据页面的位置

    display: inline-block;
	display: none;

visibility
可以用来设置一个元素的隐藏和显示的状态
- 可选值：
visible:默认值，元素会在页面显示
hidden: 元素会隐藏显示

使用visibility:hidden隐藏的元素虽然不会在页面中显示，但它的***位置依旧保持***！！！

    visibility: visible;
	visibility: hidden;
	
###overflow
子元素默认是存在于父元素内容区中的，理论上子元素的最大可以等于父元素内容区大小。
如果子元素的大小超过了父元素的内容区，则超过的大小会在父元素以外的位置显示超出父元素的内容，我称之为溢出的元素。

父元素默认将溢出的内容，在父元素外显示，通过overflow可以设置父元素如何处理溢出的内容。（滚动条）
-  可选值：
visible默认值，不会对溢出的内容做处理，元素会呈现在元素框之外。 

hidden 溢出的内容会被修剪，不会显示。

scroll 会为父元素添加滚动条，通过拖动滚动条来查看完整的内容。 
该属性不论内容是否溢出，都会添加水平和竖直方向的滚动条

auto 会根据需求自动添加滚动条，需要水平自动增加水平，需要竖直方向增加竖直，都不需要就不增加。

    overflow: hidden;
	overflow: scroll;
	overflow: auto;
	
###文档流
文档流处在网页的最底层，他表示的是一个页面的位置，我们创建的元素默认都处在文档流中
        	     
元素在文档流中的特点：

块元素   
1.块元素在文档流中会独占一行，块元素会自上而下排列；       	        2.块元素在文档流中默认宽度是父元素的100%，宽度值是auto；       	        3.块元素在文档流中默认高度被子元素内容撑开，子元素多高父元素就多高；
        	    
内联元素  
1.内联元素在文档流中只占自身的大小（不会独占一行），默认会自左而右排列；        	    如果一行中不足以容纳所有的内联元素，则会换到下一行，继续自左向右；        	        2.在文档流中，内联元素的宽度和高度默认被内容撑开。

###浮动一
块元素在文档流中默认自上而下垂直排列，
所以这几个div自上而下依次排开(可以使用display: inline-block;)

如果希望块元素在页面中水平排列，可以使块元素脱离文档流，使用float来使元素浮动，从而脱离文档流
 可选值：
none 默认值，元素默认在文档流中排列；
left 元素立即脱离文档流，向页面左侧浮动； 
right 元素立即脱离文档流，向页面右侧浮动；

当一个元素设置浮动以后（float的属性是一个非none的值）
元素立即脱离文档流，元素脱离文档流以后，他下边的元素会立即向上移动；
元素浮动以后，会尽量向页面左上或右上漂浮，直到遇到父元素的边框；

如果浮动元素上边是一个没有浮动的块元素，则浮动元素不会超过块元素（块元素相当于一堵墙）；
浮动的元素不会超过它上边的兄弟元素，最多最多同一行。

    .box3{			
		width: 200px;
		height:200px;
		background-color: green;
		float: left;
	    }

###浮动二
浮动的元素不会盖住文字，文字会自动环绕在浮动元素的周围，所以我们可以通过浮动来设置文字环绕图片的效果；

在文档流中，子元素的宽度默认占父元素的全部；
当设置元素浮动以后，会完全脱离文档流，块元素脱离文档流以后，高度和宽度都被内容撑开；

开启span的浮动：内联元素脱离文档流以后，会变成块元素（一但脱离文档流就都是块元素啦）

###简单布局
页面盒子拆分，自主练习！！！

###高度塌陷问题

在文档流中，父元素的高度认为是子元素撑开的
也就是子元素多高，父元素多高，

但是当为子元素设置浮动以后，子元素会完全脱离文档流，
此时会导致子元素无法撑起父元素的高度，导致父元素高度塌陷

由于父元素高度塌陷了，则父元素下的所有元素都会向上移动，这样将会导致页面布局的混乱。在开发中一定要避免高度塌陷的问题,

我们可以将父元素的高度写死，以避免塌陷问题的出现； 但是一旦高度写死，父元素的高度将不能自动的适应子元素的高度所以这种方案不推荐使用！！！

###解决高度塌陷问题一

根据W3C的标准，在页面中元素都有一个隐藏的属性叫做Block Formatting Context，简称BFC
该属性可以设置打开或者关闭，默认是关闭。
当开启元素的BFC以后，元素将会具有如下特性：
* 1.父元素的竖直外边距不会和子元素重叠，
* 2.开启BFC的元素不会被浮动元素所覆盖，
* 3.开启BFC的父元素可以包含子元素，！！！！

如何开启元素的BFC（间接方式）
* 1.设置元素浮动 
--- 使用这种方式开启，虽然可以撑开父元素，但会导致父元素的宽度丢失,而且使用这种方式也会导致下边的元素上移，不能解决问题
* 2.设置元素绝对定位
--- 效果同上不建议使用
* 3.设置元素为display: inline-block
--- 可以解决问题，但是会导致父元素宽度丢失，不推荐使用这种方式
* 4.将元素的overflow设置为非visibe的值，可以是overflow: auto/hidden/scroll, 但scroll会出现滚动条。
				 * 	
 **推荐方式：将overflow设置为hidden，overflow:hidden**

但是在IE6以下的浏览器中不支持BFC，所以使用此方式不能兼容IE浏览器
在IE6中虽然没有BFC，但是具有另一个隐含的属性叫做hasLayout，
该属性的作用和BFC类似，所以在IE6浏览器可以通过开启hasLayout来解决问题

开启方式很多，副作用最小的方式是：直接将元素的zoom设置为1即可   zoom:1

zoom放大的意思，后边跟着一个数值，写几就放大几倍；
zoom:1表示不放大元素，但是通过该样式可以开启hasLayout；
注意zoom这种方式支持IE6,其他的chrome、火狐不支持；

**所以解决高度塌陷问题同时使用overflow:hidden和zoom:1， 就可以兼容所有的浏览器**

    .box1{
		/*为box1设置一个边框*/
		border: 10px red solid;
		
		overflow: hidden;
		zoom：1
		}
		
###导航条练习
小练习

###解决高度塌陷问题最终方案

**清除浮动**
我们有时希望清除其他元素对当前元素产生的影响，这时可以用clear来完成此功能
 
clear可以清除其他浮动元素对当前元素的影响；
 可选值：
none：默认值，不清除移动
left：清除左侧移动元素对当前元素造成的影响
right：清除右侧移动元素对当前元素移动造成的影响
both：清除两侧移动元素对当前元素移动造成的影响
————清除对它影响最大的那个元素的移动

    .box1{
		width: 100px;
		height: 100px;
		background-color: yellow;
		/*设置box1向左浮动*/
		float: left;
			}
			
	.box2{
		width: 200px;
		height: 200px;
		background-color: yellowgreen;
				
		/*
		* 清除box1造成box2的浮动影响（由于受到box1向左浮动的影响，box2整体向上移动了100px）
		* 清除浮动以后元素会回到元素之前的位置
		*/				
		clear: left;				
		}


**解决高度塌陷问题的最终方案**
可以直接在高度塌陷的父元素的最后，增加一个空白的div，
这个div由于并没有浮动，所以它是可以撑开父元素的高度的
然后在对其进行一个清除浮动，这样可以通过这个空白的div来撑开父元素的高度，
基本没有副作用，兼容所有浏览器，使用这种方式虽然可以解决问题，但是会在页面中添加多余的结构。

		<style type="text/css">
			.box1{
				border: 1px solid red;
			}
			
			.box2{
				width: 100px;
				height: 100px;
				background-color: blue;
				
				float: left;
			}

			.clear{
				clear: left;
			}
		</style>
	</head>
	<body>
		<div class="box1">
			<div class="box2"></div>
			<div class="clear"></div>
		</div>
			
	</body>
</html>


**解决高度塌陷问题的最终方案2**
通过after伪类向元素的最后增加一个空白的内容，然后对其清除浮动，
这样和添加一个div的原理是一样的，可以达到一个相同的效果，
而且不会在页面中增加多余的div，这是我们最推荐的方式，几乎没有副作用。

但是在IE6中不支持after伪类，所以在IE6中使用还需要hasLayout来处理

    .clearfix:after{
		/*添加一个内容*/
		content: "";
		/*转换为一个块元素*/
		display: block;
		/*清除两侧的浮动*/
		clear: both;
		}
	
	.clearfix{
		zoom:1;
	   }
	   
##PS的基础操作
###快捷键
标尺：Ctrl + R
放大缩小：alt + 滚轮
适应屏幕：Ctrl + 0
100%大小：Ctrl + 1

选中框：左上角第一个虚线框,查看尺寸信息F8（或者点右边的“圆圈！”）

辅助线：直接在标尺上拉取
辅助线隐藏：Ctrl + H

拾色器：在右下角

###相对定位
**技巧** *div.box$*3  点击tab，直接生成三个box！*

**定位：**
- 定位是将指定的元素摆放到页面的任意位置
通过定位可以任意位置的摆放元素
通过position属性来设置元素的定位
-可选值：
static ：默认值，元素没有开启定位
relative ：开启元素的相对定位
absolute：开启元素的绝对定位
rfixed ：开启元素的固定定位（也属于绝对定位的一种）

**相对定位**

当元素的position的属性relative时，则开启了元素的相对定位
1.当开启了元素的相对定位以后，而不设置偏移量时，元素不会发生任何变化，
2.是相对于元素在文档流中原来的位置进行定位，
3.相对定位的元素不会脱离文档流，
4.相对定位会使元素提升一个层级，定位的元素会盖住文档流元素，
5.相对定位不会改变元素的性质，块还是块、内联还是内联

当开启了元素的定位（position属性值是一个非static的值）时，
可以通过left right top bottom 四个属性来设置元素的偏移量：
left： 元素相对于其定位位置的左侧偏移量
right： 元素相对于其定位位置的右侧偏移量
top： 元素相对于其定位位置的上边偏移量
bottom： 元素相对于其定位位置的下边偏移量


通常偏离量只需要使用两个就可以对一个元素进行定位，
一般选择水平方向的一个偏移量和垂直方向的一个偏移量进行定位

    .box1{
        position: relative;
	    left:200px;
	    top: 200px;
	    }
	
###绝对定位
当元素的position的属性设置为absolute时，则开启了元素的绝对定位
1.开启绝对定位会使元素脱离文档流，
2.开启绝对定位以后，如果不设置偏移量，则元素的位置不会发生变化，
**3.！！！！绝对定位是相对于它最近的开启了定位的祖先元素进行定位的（一般情况下开启了子元素的绝对定位都会同时开启父元素的相对定位），
	 如果所有的祖先元素都没有开启定位，则会相对于浏览器窗口进行定位**
4.绝对定位会使元素提升一个层级，
5.绝对定位会改变元素的性质，内联元素变成块元素、块元素的宽度和高度默认都被内容撑开

    .box2{
        position: absolute;
	    left:200px;
	    top: 200px;
	    }

###固定定位
当元素的position的属性设置为fixed时，则开启了元素的固定定位:
固定定位也是一种绝对定位，它的大部分特点都和绝对定位一样
!!!不同的是：
固定定位永远都是相对于浏览器窗口进行定位的,
固定定位会固定在浏览器窗口某个位置，不会随着滚动条滚动。

注：IE6不支持固定定位

    .box3{
        position: absolute;
	    left: 208px;
		top: 0px;
		}
		
###元素的层级
如果定位元素的层级是一样，则下边的元素会盖着上边的,通过z-index属性可以用来设置元素的层级.
可以为z-index指定一个正整数作为值，该值会作为当前元素的层级;
层级越高，越优先显示

对于没有开启定位的元素，不能使用z-index。

*父元素的层级再高也不会盖住子元素*

    .box3{
		width: 200px;
		height: 200px;
		background-color: yellowgreen;
		/*开启一个相对定位*/
		position: relative;
		z-index: 3;								
		}
		
###元素的透明

opcity可以用来设置元素背景的透明，它需要一个0~1之间的值
0表示完全透明、1表示完全不透明、0.5表示半透明

    .box{
        opacity: 0.5;
        }
注意：       
opcity属性在IE8及以下的浏览器中不支持 
IE8及以下的浏览器需要使用如下属性代替
filter: alpha(opacity=透明度)，透明度需要一个0到100之间的值
支持IE6，但是这种效果在IE Tester中无法测试

    .box{
        alpha(opacity=50);
        }
        
###背景图片
**使用background-image设置背景图片**
语法：background-image: url(img/图片/2.jpg)  相对路径

-如果图片大于元素，默认显示图片的左上角
-如果图片和元素一样大，则背景图片全部显示
-如果图片小于元素，则默认将背景图片平铺以使背景充满元素

    background-image: url(img/图片/2.jpg) ;
    
可以同时为一个元素指定背景颜色和背景图片，这样背景颜色将会作为背景图片的底色。一般情况下设置背景图片时都会指定一个背景颜色。


**background-repeat用于设置背景图片的重复方式**
 可选值：
repeat，默认值，背景图片会双方向重复（平铺）
no-repeat， 背景图片不会重复，有多大就显示多大
repeat-x，背景图片沿水平方向重复
repeat-y，背景图片沿垂直方向重复

    background-repeat: repeat-x;
    
###背景图片二
背景图片默认是贴着左上角显示的
**通过background-position可以调整背景图片在元素中的位置**
可选值：
该属性可以使用top、left、right、 bottom、center中的两个值来指定一个
背景图片的位置
如：top left左上
如果只给出一个值，则第二个值默认是center。

也可以直接指定两个偏移量xpos ypos：
第一个值是水平偏移量：
- 如果指定的是一个正值，则图片会向右移动指定的像素
- 如果指定的是一个负值，则图片会向左移动指定的像素
第二个值是垂直偏移量：
- 如果指定的是一个正值，则图片会向上移动指定的像素
- 如果指定的是一个负值，则图片会向下移动指定的像素

也可以指定两个x% y%，第一个值是水平位置，第二个值是垂直位置。
- 左上角是 0% 0%。右下角是 100% 100%。
- 如果仅规定了一个值，另一个值将是 50%。

    .box{
        background-position: bottom center;
	    background-position: 100px 0px;
	    }
	    
**background-attachment用来设置背景图片是否随着页面一起滚动**
可选值：
scroll：默认值，背景图片随着窗口滚动
fixed：背景图片会固定在某一位置，不随着窗口滚动

当背景图片的background-attachment设置为fixed时，背景图片的定位永远相对于浏览器的窗口
不随窗口滚动的图片，一般都设置给body，不设置给其他元素

    background-attachment: fixed;
    
样例:

    body{ 
        background-image:url('bgimage.gif');
        background-repeat:no-repeat;
        background-position:center;
        background-attachment:fixed;
        }
        
当背景图片的background-attachment设置为fixed时,背景图片的定位相对于浏览器窗口。

###按钮练习
***图片整合技术（CSS-Sprite）***

做完功能后，发现在第一次切换图片时候，会发现图片有一个非常快的闪烁，这个闪烁会造成一次不佳的用户体验

产生问题的原因：
背景图片是外部资源的形式加载进网页的，浏览器每加载一个外部资源就需要单独发送一次请求；但是我们的外部资源不是同时加载的，浏览器会在资源被使用时才会去加载资源；我们这个练习，一上来浏览器只会加载link.png，由于hover和active的状态没有马上触发，所以hover.png和active.png并不是立即加载的。
当hover被触发时，浏览器才去加载hover.png
当active被触发时，浏览器才去加载active.png
由于加载图片需要一定时间，所以在加载和显示过程会有一段时间，背景图片无法显示，导致出现闪烁


为了解决该问题，可以将三个图片整合为一张图片，这样可以同时将三张图片一起加载，就不会出现闪烁，然后再通过background-position来切换要显示图片的位置，这种技术叫做**图片整合技术（CSS-Sprite**）
优点：
1.将多个图片整合为一张图片，浏览器只需要发送一次请求，可以同时加载多张图片，提高了访问效率，优化用户体验；
2.将多个图片整合为一张图片，减小了图片的总大小，提高了请求的速度，增加了用户体验。

###背景的简写属性
背景的简写属性background
- 通过该属性可以同时设置所有背景相关的样式
- 没有顺序的要求，无前后之分
- 没有数量的要求，不写的样式就使用默认值

    background: #BBFFAA url(img/图片/大黄猫/dahuangmao-17.png) no-repeat center center fixed;
    
    
###表格
在HTML中用table标签来创建表格
在table标签中使用tr来表示表格中的一行，有几行就有几个tr，
在table标签中使用tb来表示表格中的一行，有几行就有几个tb。

合并单元格：colspan / rowspan
colspan横向的合并单元格
rowspan纵向的合并单元格

    <body>
		<!--
			表格是用来表示一些格式化的数据的，如课程表、对账单
			在网页中也可以创建表格
        -->
        <!--
        	在HTML中用table标签来创建表格
        	在table标签中使用tr来表示表格中的一行，有几行就有几个tr
        	在table标签中使用tb来表示表格中的一行，有几行就有几个tb
        -->
        <table border="1" width="40%">
        	<tr>
        		<td>A1</td>
        		<td>A2</td>
        		<td>A3</td>
        		<!--rowspan纵向的合并单元格-->
        		<td rowspan="2">A4</td>
        	</tr>
        	
        	<tr>
        		<td>B1</td>
        		<td>B2</td>
        		<td>B3</td>
        		<!--<td>B4</td>-->
        	</tr>
        	
        	<tr>
        		<td>C1</td>
        		<td>C2</td>
        		<!--colspan横向的合并单元格-->
        		<td colspan="2">C3</td>
        		<!--<td>C4</td>-->
        	</tr>
        </table>
	</body>
</html>

###表格的样式

table和td边框之间默认有一个距离
通过border-spacing属性可以设置这个距离

通过border-collapse可以设置边框合并 
注：如果设置了border-collapse，则border-spacing自动失效。

    border-spacing: 0px;
    border-collapse: collapse;

可以使用th标签来表示表头中的内容，它的用法和td一样，不同的是它会有一些默认的样式。

    <tr>
        <!--可以使用th标签来表示表头中的内容
        	它的用法和td一样，不同的是它会有一些默认的样式
        -->
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>住址</th>
    </tr>
    
*设置隔行颜色及选中变色*
偶数行设置隔行变色，odd奇数行、even偶数行
hover鼠标在哪一行哪一行变色

    /*设置表格边框*/	
    td ,th{
        border: 1px solid black;
    }
            
    /*偶数行设置隔行变色，odd奇数行、even偶数行*/
    tr:nth-child(odd){
        background-color: #bfa;
    }
    tr:nth-child(even){
        background-color: skyblue;
    }
    /*hover鼠标在哪一行哪一行变色*/
    tr:hover{
        background-color: yellow;
    }
    
    
###长表格
在一些情况下表格是非常长的，这时就需要将表格分为三个部分：表头、表格主体、表格底部
在HTML中为我们提供了三个标签
thead 表头
tbody 表格主体
tfoot 表格底部
        	
这三个标签的作用，就用来区分表格的不同的部分，他们都是table的子标签，都需要直接写到table中，tr需要写在这些标签当中
        	    
thead的中的内容，永远显示在表格的头部
tfoot的中的内容，永远显示在表格的底部
tbody的中的内容，永远显示在表格的中间
        	
如果表格中没有将内容分成（没有写tbody），浏览器会自动在表格中增加tbody，并且将所有的tr都放到tbody中。所以注意tr并不是table的子元素，而是tbody的子元素通过table > tr无法选中行，需要tbody > tr。

###表格的布局
以前表格更多的情况实际上是用来对页面进行布局的，但是这种方式早已被CSS所淘汰了！！！


###完善clear.fix
可以解决父子元素外边距重叠

	.clearfix:before{
	    content: "";
		display: table;
			}

***经过修改后的clear.fix是一个多功能的，
既可以解决高度塌陷，又可以确保父元素和子元素的垂直外边距不会重叠***

    .clearfix:before,
	.clearfix:after{
		content: "";
		display: table;
		clear: both ;
	}

###表单简介
表单的作用就是用来将用户信息提交给服务器的。常见的比如百度的搜索框、登录注册页面，都需要填写表单
			
使用form标签来创建表单
form标签中必须指定一个action属性，该属性指向的是一个服务器的地址，当我们提交表单时将会提交到action属性对应的地址

    <form action="" method="post">
        	<input type="submit" value=""/>
        </form>

使用form创建的仅仅是一个空白的表单，还需要向form中添加不同的表单项
使用input创建一个文本框，它的type属性为text；如果希望表单项中的数据会提交到服务器中，还必须给表单项指定一个name属性。
用户填写的信息会附在url地址后边以查询字符串的形式发送给服务器
url地址？查询字符串
格式：属性名=属性值&属性名=属性值&……
        		    
在文本框中也可以指定value属性值，该值将会作为文本框的默认值显示

**用户名**

        	用户名<input type="text" name="username"/>
     
**密码框**
使用input创建一个密码框，它的type属性为password

        	密码<input type="password" name="password"/>

**提交按钮**
可以将表单中的信息提交给服务器使用input创建提交按钮，它的type属性为submit。 在提交按钮中可以通过value属性来指定按钮上的文字。

        	<input type="submit" value="注册" />
        	
###表单选项

**单选按钮**
使用input创建一个单选按钮，它的type属性为radio
 - 单选按钮通过name属性进行分组，name属性相同是一组
 - 像这种需要用户选择的但是不需要用户直接填写内容的表单项
        
！！还必须指定一个value属性，这样被选中的表单项的value属性值将会最终提交给服务器
  	            
如果希望在单项按钮或者是多项选框中指定默认选中的选项，则可以在希望选中的项中添加checked="checked"属性。
  
    
    <!--单选按钮
        - 使用input创建一个单选按钮，它的type属性为radio
        - 单选按钮通过name属性进行分组，name属性相同是一组
        - 像这种需要用户选择的但是不需要用户直接填写内容的表单项
        
        ！！还必须指定一个value属性，这样被选中的表单项的value属性值将会最终提交给服务器
            	            
        如果希望在单项按钮或者是多项选框中指定默认选中的选项，
        则可以在希望选中的项中添加checked="checked"属性
    -->
        	性&nbsp&nbsp&nbsp&nbsp别
        	<input type="radio" name="gender" value="male"/>男
        	<input type="radio" name="gender" value="female" checked="checked"/>女
        	<br /><br />
        	
**多选框**
使用input创建一个多选框，它的type属性为checkbox
- 多选框通过name属性进行分组，name属性相同是一组
- 像这种需要用户选择的但是不需要用户直接填写内容的表单项
        
！！还必须指定一个value属性，这样被选中的表单项的value属性值将会最终提交给服务器


    <!--多选框
        - 使用input创建一个多选框，它的type属性为checkbox
        - 多选框通过name属性进行分组，name属性相同是一组
        - 像这种需要用户选择的但是不需要用户直接填写内容的表单项
        
        ！！还必须指定一个value属性，这样被选中的表单项的value属性值将会最终提交给服务器
    -->
        爱&nbsp&nbsp&nbsp&nbsp好
        <input type="checkbox" name="hobby" value="soccer"/>足球
        <input type="checkbox" name="hobby" value="basketball"/>篮球
        <input type="checkbox" name="hobby" value="badminton"/>羽毛球
        <input type="checkbox" name="hobby" value="swimming" checked="checked"/>游泳
        <input type="checkbox" name="hobby" value="pingpang"/>乒乓球
    <br /><br />
    
**下拉列表**
使用select创建一个下拉列表，在下拉列表中使用option标签来创建一个个列表项   
- 下拉列表的name属性需要指定给select，而value属性需要指定给option，可以通过在option中添加selected="selected"来将选项设置为默认选中
            	
当select添加一个multiple="multiple"，则下拉列表变为一个多选的下拉列表（可以选中多个）

此外：在select中可以使用optgroup对选项进行分组，同一个optgroup中的选项是一组，使用通过lable属性来指定分组的名字。

    <!--下拉列表
        - 使用select创建一个下拉列表
        在下拉列表中使用option标签来创建一个个列表项   
        - 下拉列表的name属性需要指定给select，而value属性需要指定给option
            	    
        可以通过在option中添加selected="selected"来将选项设置为默认选中
            	
        当select添加一个multiple="multiple"，则下拉列表变为一个多选的下拉列表（可以选中多个）
    -->
    
    你喜欢的明星
        <select name="star" <!--multiple="multiple"--> >

    <!-- 在select中可以使用optgroup对选项进行分组，同一个optgroup中的选项是一组，使用通过lable属性来指定分组的名字-->
            <optgroup label="女明星">
                <option value="fbb">范冰冰</option>
                <option value="lyf" selected="selected">刘亦菲</option>
            	<option value="lzl">林志玲</option>
            </optgroup>
        		
        <optgroup label="男明星">
        	<option value="zbs">赵本山</option>
        	<option value="ldh" selected="selected">刘德华</option>
        	<option value="hg">胡歌</option>
        </optgroup>
        
        <!--<option value="fbb">范冰冰</option>
        	<option value="lyf" selected="selected">刘亦菲</option>
        	<option value="lzl">林志玲</option>
        	<option value="zbs">赵本山</option>
        	<option value="ldh" selected="selected">刘德华</option>
        	<option value="hg">胡歌</option>-->
    </select>
    <br /><br />
    
  **创建文本域**  
  使用textarea创建一个文本域

    自我介绍<textarea name="info" >
        		
        	</textarea>
    
设置文本域不能调整大小用

    resize: none;

 **label标签**   
 在html中还为我们提供了一个标签，专门用来选中表单中的提示文字的label标签，使用该标签可以指定一个for属性，该属性的值需要指定一个表单项的id值。

    <label for="um">用户名</label>
        <input id="um" type="text" name="username"/>
**fieldset**
在表单中可以使用fieldset来为表单项进行分组，可以将表单项中的同一组放到一个filedset
在filedset中可以使用legend子标签来指定组名


    <fieldset>
        <legend>用户信息</legend>
        <label for="um">用户名</label>
        <input id="um" type="text" name="username"/>
        <br /><br />
     </fieldset>

###框架集
框架集和内联框架的作用类似，都是用于在一个页面中引入其他的外部的页面，框架集可以同时引入多个页面，而内联框架只能引入一个。
在h5标准中，推荐使用框架集，而不使用内联框架
        	    
使用frameset来创建一个框架，注意frameset不能body出现在一个页面中，所以要是有框架集，页面就不可以使用body标签
        	  
属性： 
    rows，指定框架集中所有的框架，一行一行的排列
    cols，指定框架集中所有的框架，一列一列的排列
这两个属性frameset必须选择一个，并且需要在属性中指定每一部分的大小， 可以使用“*”来代替
        	
frameset中可以再嵌套frameset
        	
frameset和iframe一样，它里边的内容都不会被搜索引擎所检索，所以如果搜索引擎检索到的页面是一个框架的话，它是不能去判断里边的内容的。	使用框架集则意味着页面中不能有自己的内容，只能引入其他的页面，而我们每单独加载一个页面浏览器都需要重新发送一次请求，引入几个页面就需要发送几次请求，用户体验比较差。
如果非要使用，建议使用frameset 。

    <!--<frameset rows="30%, *,35%">-->
        
    <frameset cols="30%, 35%,35%">
    <!-- 在frameset中使用frame子标签来指定要引入的页面引入几个页面就写几个frame -->
    	<frame src="01.表格.html"/>
    	<frame src="02.表格的样式.html"/>
    	<!--<frame src="03.长表格.html"/>-->
    	<!--嵌套一个frameset -->
    	<frameset rows="30%, 35%,*">    
    	    <frame src="03.长表格.html"/>
    	    <frame src="04.表格的布局.html"/>
    	    <frame src="05.完善clearfix.html"/>
    </frameset>

###图片IE6
在IE6中对图片格式png24支持度不高
如果使用图片的格式是png24，则会导致透明效果无法正常显示
解决方法：
1. 可以使用png8代替png24，即可解决问题。但是使用png8代替png24以后，图片的清晰度会有所下降；
2.使用JavaScript来解决，需要向页面中引入一个外部的JavaScript文件，然后再写一些简单的JS代码，来处理该问题

以下代码记住：

    <!--	在body标签的最后引入外部的JS文件    -->
	<script type="text/javascript" src="js/ie6_png/DD_belatedPNG_0.0.8a-min.js"></script>
	<!--   在创建一个新的script标签，并编写一些js代码    -->
	<script type="text/javascript">
		DD_belatedPNG.fixe("div,img")
	</script>
	
###CCS-hack
有一些情况，有一些特殊的代码我们只需要在某些特殊的浏览器中执行，而在其他的浏览器中不需要执行，这时候可以使用CSS-hack来解决该问题

CSS-hack实际上指的是一个特殊的代码，这段代码只在某些浏览器中可以识别，而其他浏览器不能识别，通过这种方式，来为一些浏览器设置特殊的代码

    <link rel="stylesheet" type="text/css" href="css/style.css"/>
	<!--[if IE 8]>
	<link rel="stylesheet" type="text/css" href="css/style-ie.css"/>
	<![endif]-->
	
条件hack
只对IE浏览器有效，其他浏览器都会将其识别为注释
IE10及以上的浏览器已经不支持这种方式，这种方式只支持IE10以下的
        
快捷输出<!--[if IE]>  <![endif]-->方式：alt + /

###hack属性
1.在该样式前端添加一个下划线（_），则该样式只有IE6及以下的浏览器才可以识别；

    _background-color: yellow;

2.在该样式前端添加一个星号（*），则该样式只有IE7及以下的浏览器才可以识别；

    *background-color: yellow;
    
 3.在该样式前端添加一个（\0），则该样式只有IE8及以上的浏览器才可以识别；
 

    background-color: yellow\0;

 ***CSS hack不到万不得已的情况尽量不要使用！！！***
 
 4.在选择器前添加* html ,则该选择器只有IE6可以识别；
 

    * html body{
		background-color: #bfa;
		}
		
##POLO360页面练习
有一个重置reset.css通用文件

裁切选中图层：**点击alt、然后点击图层前边的眼睛**，就可以得到该图层的完整图片。“图像--裁切--保存web格式” 

**placeholder**
在文本框和文本域中可以通过placeholder来指定提示文字（水印）

    <input class="txt" type="text" placeholder="your name" />
    
**cursor**
可以用来设置鼠标指针的样式，可选值参考W3School
其中：pointer表示显示为一个小手的样式。

    cursor: pointer;

**问题**  
在IE6中，当为一个向左浮动的元素设置左外边距，或者为一个向右浮动的元素设置右外边距时，这个外边距将会是设置值的2倍。

添加一个样式来解决IE6的双倍边距问题：对于一个浮动元素来说设置display: inline没有任何意义，但是该属性可以解决IE6的双倍边距问题。

    <style type="text/css">
		*{
			margin: 0;
			padding: 0;		    	
		}
		   
		.box1{
			width: 100px;
			height: 100px;
			float: 100px;
			display: inline;
			background-color: red;
			margin-left: 100px;
		}
	</style>

##项目CSS开发流程
接项目→需求分析（产品经理）：客户要求、定义功能、业务流程、前端页面设计，其时间占比整个项目1/3→开发编码，时间占比1/6→测试时间，时间占比1/2（改bug阶段）

测试阶段：性能测试和业务测试
性能测试：时间不能超过3秒，提高网站的访问速度；

###代码压缩
使用 JS CSS压缩工具 JsCssZip.exe
###图片整合
只适用于背景图片