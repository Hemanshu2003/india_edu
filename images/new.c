#include<stdio.h> 

    int main(){
    int n ;
    printf("Enter the number of element's :");
    scanf("%d",&n);
    int arr[n];
    for(int i =0 ; i<n;i++){
        scanf("%d",&arr[i]);
    }
    int min = 1000000;
    int max = -1000000;

    for(int i = 0; i< n ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }
    printf("min : %d , max : %d",min,max);

return 0;
}