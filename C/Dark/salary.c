#include <stdio.h>
int main(){
    int empty,salary,hra,ta,da,in;
    
    printf("Enter your selary: ");
    scanf("%d", &salary);

    if (salary <= 5000) {
        hra = (5 * salary ) / 100;
        ta  = (2 * salary ) / 100;
        da  = (3 * salary ) / 100;
        in  = (3 * salary ) / 100;
        empty = salary + hra + ta + da - in;
    }
    if (salary > 5000) {
        hra = (7 * salary ) / 100;
        ta  = (8 * salary ) / 100;
        da  = (3 * salary ) / 100;
        in  = (4 * salary ) / 100;
        empty = salary + hra + ta + da - in;
    }
    if (salary > 15000) {
        hra= (15 * salary ) / 100;
        ta  = (8 * salary ) / 100;
        da  = (3 * salary ) / 100;
        in  = (6 * salary ) / 100;
        empty = salary + hra + ta + da - in;
        
    }

    printf("\nYour salary is : %d",empty);
    
    return 0;
}

