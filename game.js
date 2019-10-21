'use strict';

class Game
{

 start()
 {
  var i=0;
  var x=0;
  var y=0;
  this.imagePath="./images/";
  this.boardSize=4;
  this.tileSize=40;
  this.tokenSize=40;
  this.border=5;
  this.board=new Board(this.boardSize,this.boardSize,
    this.tileSize,this.tileSize);

  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bce.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bcer.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bcf.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bcfr.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wce.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wcer.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wcf.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wcfr.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bse.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bser.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bsf.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"bsfr.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wse.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wser.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wsf.png"));
  i++;
  x=(i%4)*this.tokenSize+(i%4);
  x+=this.border;
  y=((i/4)|0)*this.tokenSize+((i/4)|0);
  y+=this.border+this.boardSize*this.tileSize+this.boardSize;
  this.board.addToken(new Token(x,y,
     this.tokenSize,this.tokenSize,
     this.imagePath+"wsfr.png"));
  i++;

  this.selectedToken=-1;
  this.selection=new Token(-this.tokenSize,-this.tokenSize,
    this.tokenSize,this.tokenSize,
    this.imagePath+"selection.png");
  this.selection.draw();

  this.board.draw(this.border,this.border);
 }

 onTileClick(x,y)
 {
  if(this.selectedToken!=-1)
  {
   this.board.tokens[this.selectedToken].x=this.board.board[y][x].x+this.border;
   this.board.tokens[this.selectedToken].y=this.board.board[y][x].y+this.border;
   this.selectedToken=-1;
   this.selection.x=-this.selection.width;
   this.selection.y=-this.selection.height;
   this.selection.draw();
   this.board.draw(this.border,this.border);
  }
 }

 onTokenClick(i)
 {
  if(this.selectedToken==-1)
  {
   this.selectedToken=i;
   this.selection.x=this.board.tokens[i].x;
   this.selection.y=this.board.tokens[i].y;
   this.selection.draw();
  }
 }

}
