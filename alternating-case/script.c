#include <stdio.h>

char alternatingCase(char *case) {
  // complete this
}

int main(void) {
  int test_count = 0;
  scanf("%d", &test_count);
  while(test_count > 0) {
    char *case;
    scanf("%s", &case);
    alternatingCase(case);
    --test_count;
  }
}