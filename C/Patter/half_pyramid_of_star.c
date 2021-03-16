#include <stdio.h>

void main() 
{
   int i, j, h=0;
   printf("Enter the number of rows: ");
   scanf("%d",&h);
   for (i = 1; i <= h; i++) 
   {
      for (j = 1; j <= i; j++) 
      {
         printf("* ");
      }
      printf("\n");
   }
}