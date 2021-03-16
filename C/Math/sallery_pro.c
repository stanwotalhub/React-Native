# include<stdio.h>

int main(){
    
    int BS;

    printf("Enter your sallery: ");
    scanf("%d",&BS);

    int da = (BS * 3)/100;

    if(BS <= 5000 && BS >= 1000 )
    {
        int hra = (BS * 5)/100;
        int ta  = (BS * 2)/100;
        int ins = (BS * 3)/100;

        int NetSl = BS + hra + ta + da - ins;

        printf("Your HRA is %d rs \n",hra);
        printf("Your TA is %d rs \n",ta);
        printf("Your DA is %d rs \n",da);
        printf("Deducted for insurence %d rs \n",ins);
        printf("Your net sallery is %d rs",NetSl);
    }

    else if(BS > 5000  && BS <= 10000)
    {
        int hra = (BS * 7)/100;
        int ta  = (BS * 8)/100;
        int ins = (BS * 4)/100;

        int NetSl = BS + hra + ta + da - ins;

        printf("Your HRA is %d rs \n",hra);
        printf("Your TA is %d rs  \n",ta);
        printf("Your DA is %d rs  \n",da);
        printf("Deducted for insurence %d rs \n",ins);
        printf("Your net sallery is %d rs",NetSl);
    }

    else if(BS > 10000 && BS < 15000)
    {
        int hra = (BS * 7)/100;
        int ta  = (BS * 8)/100;
        int ins = (BS * 6)/100;

        int NetSl = BS + hra + ta + da - ins;

        printf("Your HRA is %d rs \n",hra);
        printf("Your TA  is %d rs \n",ta);
        printf("Your DA  is %d rs \n",da);
        printf("Deducted for insurence %d rs \n",ins);
        printf("Your net sallery is %d rs",NetSl);

    }

    else if(BS >= 15000 && BS <= 20000)
    {
        int hra = (BS * 12)/100;
        int ta  = (BS * 8)/100;
        int ins = (BS * 8)/100;

        int NetSl = BS + hra + ta + da - ins;

        printf("Your HRA is %d rs \n",hra);
        printf("Your TA is %d rs  \n",ta);
        printf("Your DA is %d rs  \n",da);
        printf("Deducted for insurence %d rs \n",ins);
        printf("Your net sallery is %d rs",NetSl);  
    }
    else
    {
         printf("You are fire");
    }
    
    return 0;
}