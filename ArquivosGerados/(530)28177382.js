    	for (i = 0; i < 100; i++) {&#xD;&#xA;    	  rol[i] = (struct roll * ) malloc(100 * sizeof(struct roll));&#xD;&#xA;    	  if (rol[i] == NULL) {&#xD;&#xA;    	    printf("%d Couldn't able to allocate requested memory for roll\n", i);&#xD;&#xA;    	    getch();&#xD;&#xA;    	    exit(0);&#xD;&#xA;    	  }&#xD;&#xA;    	  for (j = 0; j < 25; j++) {&#xD;&#xA;    	    rol[i] -> yr[j] = (struct year * ) malloc(25 * sizeof(struct year));&#xD;&#xA;    	    if (rol[i] -> yr[j] == NULL) {&#xD;&#xA;    	      printf("%d Couldn't able to allocate requested memory for year\n", i);&#xD;&#xA;    	      getch();&#xD;&#xA;    	      exit(0);&#xD;&#xA;    	    }&#xD;&#xA;    	    for (k = 0; k < 12; k++) {&#xD;&#xA;    	      rol[i] -> yr[j] -> mn[k] = (struct month * ) malloc(12 * sizeof(struct month));&#xD;&#xA;    	      if (rol[i] -> yr[j] -> mn[k] == NULL) {&#xD;&#xA;    	        printf("%d Couldn't able to allocate requested memory for month\n", i);&#xD;&#xA;    	        getch();&#xD;&#xA;    	        exit(0);&#xD;&#xA;    	      }&#xD;&#xA;    	      for (l = 0; l < 31; l++) {&#xD;&#xA;    	        rol[i] -> yr[j] -> mn[k] -> da[l] = (struct day * ) malloc(31 * sizeof(struct day));&#xD;&#xA;    	        if (rol[i] -> yr[j] -> mn[k] -> da[l] == NULL) {&#xD;&#xA;    	          printf("%d Couldn't able to allocate requested memory for day\n", l);&#xD;&#xA;    	          getch();&#xD;&#xA;    	          exit(0);&#xD;&#xA;    	        }&#xD;&#xA;    	      }&#xD;&#xA;    	    }&#xD;&#xA;    	  }&#xD;&#xA;    	}