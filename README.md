Angular 开发环境配置方式                
基于 Angular Quickstart             
https://github.com/angular/qu...              
基于 Angular CLI                          
npm install -g @angular/cli                    


1.下载依赖包         
$ npm install      

2.启动服务。默认端口4200          
$ npm start      

3.编译生成dist文件夹    
$ ng build         

4.与java项目结合          
拷贝dist文件夹到eclipse项目文件里               
修改dist/index.html的
```html
<base href="">   
```
改为项目名+文件 名 eg:/dmio/dist/
```sql
<base href="/mio/dist/">    
```
