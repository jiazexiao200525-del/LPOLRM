# LRM × Li₃PO₄ 项目网页总看板

静态网站，无需安装依赖或构建。仓库首页自动打开项目总看板，可以访问成果页、主动学习讨论、DPA4 技术路线、v3.2 交互执行流程、实施手册、术语看板及报告。

## 上传及开启 GitHub Pages

1. 将压缩包解压。进入解压后的文件夹，将里面的全部文件和文件夹上传到 GitHub 仓库根目录。根目录必须直接看到 `index.html`、`.nojekyll`、`project_results_web/` 等；不要只上传 ZIP，也不要再多套一层文件夹。
2. 仓库中打开 **Settings → Pages**。
3. **Source** 选择 **Deploy from a branch**；**Branch** 选择 `main`（或实际上传的分支），目录选择 **/(root)**，点击 **Save**。
4. 等待 Pages 部署完成，打开显示的站点链接。若已有 Pages，提交文件后会自动更新。

地址示例：`https://jiazexiao200525-del.github.io/LRM-LPO-mlp/`（实际地址以仓库 Pages 显示为准）。

## 文件与更新

- 根目录 `index.html`：跳转至总看板。
- `project_results_web/project-hub.html`：总看板。
- `project_results_web/project-pages.js`：9 个模块的入口清单，新增网页在这里登记。
- `project_results_web/mlip-execution-plan.html`：v3.2 交互执行流程。
- 其他目录：网页实际引用的图像和说明报告，保持目录结构完整。

文档为 Markdown，浏览器打开时可能显示文本或下载；在 GitHub 仓库中点击 `.md` 文件可查看排版与图片。网页里的文档预览功能需通过 HTTP/HTTPS 使用。

只包含网页展示内容、图片与说明文档；不包含模型 checkpoint、计算任务目录、cube 原始网格、CSV/JSON 数据下载和计算脚本。对应的数据下载卡片已移除，cube 入口已改为说明。原本使用本机绝对路径的文档链接已转换为相对路径；未发布的原始文件引用保留文字说明。科学内容未作重新计算或审核。

交互流程的主题、展开状态与清单保存在各访客自己的浏览器中，不会同步到仓库或其他访客。
