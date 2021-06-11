## 欢迎访问[swufe-ccf_show_ranking](https://github.com/Nixiak-nan/swufe-ccf_show_ranking)源代码资源库！
### Welcome to visit source of swufe-ccf_show_ranking!

### 简介

> swufe-ccf_show_ranking是踩在了巨人的肩膀上，我们利用了Github上开源的某CCF插件：show-rank 二次制作而成，在此非常感谢作者的无私奉献。如果您需要该版本，请转到以下位置进行浏览和下载：[show-rank主页](https://github.com/hnshhslsh/show-rank)

**swufe-ccf_show_ranking** 是一个Google Chrome扩展，用于在论文搜索结果页面显示会议/期刊等级。目前支持在 [Springer](https://link.springer.com/), [DBLP](https://dblp.uni-trier.de/), [IEEExplore](https://ieeexplore.ieee.org/) 和 [ACM Digital Library](https://dl.acm.org/) 上显示 CCF （中国计算机协会）等级，在[知网](https://www.cnki.net/)上显示[SWUFE](https://www.swufe.edu.cn/)（西南财经大学）等级。

### 安装

1. 从[GitHub](https://github.com/Nixiak-nan/swufe-ccf_show_ranking)**下载**源代码。
2. **解压至某个文件夹内**，注意路径要全部为英文。
3. 打开谷歌浏览器，依次点击**右上方三个小点点，更多工具，扩展程序**。
4. 打开右上方**开发者模式**。
5. 点击左上角**加载已解压的扩展程序**。
6. 选择**步骤2的文件夹**。

### 项目展示

- **在[知网](https://www.cnki.net/)上搜索论文时，会自动地在来源后加上会议/期刊的SWUFE等级，并以不同颜色标识，共分为A+,A,B,C四种。不仅支持原始知网链接，还支持使用[swufe-webvpn](https://webvpn.swufe.edu.cn/)登录知网的链接。**

![图片](picture/1.png)

![图片](picture/2.png)

- **在 [Springer](https://link.springer.com/), [DBLP](https://dblp.uni-trier.de/), [IEEExplore](https://ieeexplore.ieee.org/) 和 [ACM Digital Library](https://dl.acm.org/) 会自动地在来源前加上会议/期刊的 CCF 等级，并以不同颜色标识。**

  在此不做演示，请前往[show-rank](https://github.com/hnshhslsh/show-rank)仓库查看

### 想要自定义知网的等级数据？

- 点个小星星 + fork
- 修改data下的**swufeRankingName.js**中的数据

- 利用编辑器功能，进行**所有文件全局替换**，将swufe替换为自己学校的名称缩写
- 更换logo下的图片，请注意像素大小应该相同

### 数据来源

- CCF:  [magichan](https://github.com/magichan/CCF-Recommended-Catalog-2019) for CCF Rank data / 提供CCF排名数据
- SWUFE :《西南财经大学学术期刊目录2019》