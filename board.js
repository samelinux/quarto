'use strict';

class Token
{

 constructor(x,y,width,height,image)
 {
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.gfx=document.createElement("img");
  this.gfx.src=image;
  this.gfx.style.position="absolute";
  this.gfx.style.left=this.x;
  this.gfx.style.top=this.y;
  this.gfx.style.width=this.width;
  this.gfx.style.height=this.height;
  document.getElementById("body").appendChild(this.gfx);
 }

 setIndex(index)
 {
  this.index=index;
  this.gfx.onclick=function(){game.onTokenClick(index);};
 }

 draw()
 {
  this.gfx.style.left=this.x;
  this.gfx.style.top=this.y;
 }

}
class Tile
{

 constructor(x,y,width,height)
 {
  this.x=x*width+x;
  this.y=y*width+y;
  this.width=width;
  this.height=height;
  this.gfx=document.createElement("div");
  this.gfx.style.position="absolute";
  this.gfx.style.left=this.x;
  this.gfx.style.top=this.y;
  this.gfx.style.width=this.width;
  this.gfx.style.height=this.height;
  this.gfx.style.backgroundColor="#444444";
  this.gfx.onclick=function(){game.onTileClick(x,y);};
  document.getElementById("body").appendChild(this.gfx);
  this.tokens=new Array();
 }

 draw(x,y)
 {
  this.gfx.style.marginLeft=x+"px";
  this.gfx.style.marginTop=y+"px";
 }

}

class Board
{
 constructor(boardWidth,boardHeight,tileWidth,tileHeight)
 {
  this.boardWidth=boardWidth;
  this.boardHeight=boardHeight;
  this.tileWidth=tileWidth;
  this.tileHeight=tileHeight;
  this.board=new Array(this.boardHeight);
  for(var y=0;y<this.boardHeight;y++)
  {
   this.board[y]=new Array(this.boardWidth);
   for(var x=0;x<this.boardWidth;x++)
   {
    this.board[y][x]=new Tile(x,y,this.tileWidth,this.tileHeight);
   }
  }
  this.tokens=new Array();
 }

 addToken(token)
 {
  token.setIndex(this.tokens.length);
  this.tokens.push(token);
 }

 draw(x,y)
 {
  for(var ty=0;ty<this.boardHeight;ty++)
  {
   for(var tx=0;tx<this.boardWidth;tx++)
   {
    this.board[ty][tx].draw(x,y);
   }
  }
  for(var i=0;i<this.tokens.length;i++)
  {
   this.tokens[i].draw(x,y);
  }
 }

}

