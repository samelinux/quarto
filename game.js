'use strict';

class Game
{

 start()
 {
  var i=0;
  var x=0;
  var y=0;
  this.imagePath="./images/";
  this.board=new Board(4,4,50,50);

  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bce.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bcer.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bcf.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bcfr.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wce.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wcer.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wcf.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wcfr.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bse.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bser.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bsf.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"bsfr.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wse.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wser.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wsf.png"));
  i++;
  x=(i%4)*50+(i%4);
  y=((i/4)|0)*50+((i/4)|0);
  this.board.addToken(new Token(5+x,214+y,50,50,this.imagePath+"wsfr.png"));
  i++;

  this.selectedToken=-1;
  this.selection=new Token(-50,-50,50,50,this.imagePath+"selection.png");
  this.selection.draw();

  this.board.draw(5,5);
 }

 onTileClick(x,y)
 {
  if(this.selectedToken!=-1)
  {
   this.board.tokens[this.selectedToken].x=this.board.board[y][x].x+5;
   this.board.tokens[this.selectedToken].y=this.board.board[y][x].y+5;
   this.selectedToken=-1;
   this.selection.x=-this.selection.width;
   this.selection.y=-this.selection.height;
   this.selection.draw();
   this.board.draw(5,5);
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
