#include <stdio.h>

char humanYearsCatYearsDogYears(void) {
  int humanYears, catYears, dogYears;
  humanYears = 0;
  catYears = 0;
  dogYears = 0;
  takeHumanYears:
  printf("Enter human years: ");
  scanf("%d", &humanYears);
  if(humanYears <= 0) {
    goto takeHumanYears;
  } else {
    for(int i = 1; i <= humanYears; i++) {
      switch(i) {
        case 1:
          catYears += 15;
          dogYears += 15;
          break;
        case 2:
          catYears += 9;
          dogYears += 9;
          break;
        default:
          catYears += 4;
          dogYears += 5;
          break;
      }
    }
    printf("[%d, %d, %d]\n", humanYears, catYears, dogYears);
  }
}

int main(void) {
  int test_case = 0;
  scanf("%d", &test_case);
  while(test_case > 0) {
    humanYearsCatYearsDogYears();
    --test_case;
  }
}