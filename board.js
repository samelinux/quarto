'use strict';

class Token
{

 constructor(x,y,width,height,image)
 {
  this.hidden=false;
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.gfx=document.createElement("img");
  this.gfx.src=image;
  this.gfx.style.position="absolute";
  this.gfx.style.left=this.x+"px";
  this.gfx.style.top=this.y+"px";
  this.gfx.style.width=this.width+"px";
  this.gfx.style.height=this.height+"px";
  document.getElementById("body").appendChild(this.gfx);
 }

 setIndex(index)
 {
  this.index=index;
  this.gfx.onclick=function(){game.onTokenClick(index);};
 }

 draw()
 {
  this.gfx.style.width=this.width+"px";
  this.gfx.style.height=this.height+"px";
  if(this.hidden)
  {
   this.gfx.style.left=(-this.width)+"px";
   this.gfx.style.top=(-this.height)+"px";
  }
  else
  {
   this.gfx.style.left=this.x+"px";
   this.gfx.style.top=this.y+"px";
  }
 }

}

class Tile
{

 constructor(x,y,width,height,bgcolor)
 {
  this.x=x*width+x;
  this.y=y*width+y;
  this.width=width;
  this.height=height;
  this.gfx=document.createElement("div");
  this.gfx.style.position="absolute";
  this.gfx.style.left=this.x+"px";
  this.gfx.style.top=this.y+"px";
  this.gfx.style.width=this.width+"px";
  this.gfx.style.height=this.height+"px";
  this.gfx.style.backgroundColor=bgcolor;
  this.gfx.onclick=function(){game.onTileClick(x,y);};
  document.getElementById("body").appendChild(this.gfx);
  this.token=null;
 }

 draw(x,y)
 {
  this.gfx.style.width=this.width+"px";
  this.gfx.style.height=this.height+"px";
  this.gfx.style.marginLeft=x+"px";
  this.gfx.style.marginTop=y+"px";
  if(this.token!=null)
  {
   this.token.x=this.x+x;
   this.token.y=this.y+y;
   this.token.draw();
  }
 }

}

class Board
{

 constructor(boardWidth,boardHeight,tileWidth,tileHeight,tileBgcolor)
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
    this.board[y][x]=new Tile(x,y,this.tileWidth,this.tileHeight,tileBgcolor);
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
   if(this.tokens[i]!=null)
   {
    this.tokens[i].draw(x,y);
   }
  }
 }

}

