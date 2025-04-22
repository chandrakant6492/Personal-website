(function() {
        // Only on your blogs page
        if (window.location.pathname.endsWith('/blogs.html')) {
          // Fetch navigation info
          const navEntries = performance.getEntriesByType('navigation');
          const navType = navEntries.length
            ? navEntries[0].type
            : performance.navigation.type; 
      
          // “navigate” means we came here fresh (not via reload)
          // Navigation Timing 2: 'navigate' | 'reload' | 'back_forward' | 'prerender'
          // Fallback (Navigation Timing 1): performance.navigation.TYPE_NAVIGATE === 0
          const isFreshNav = (
            (navType === 'navigate') ||
            (typeof navType === 'number' && navType === performance.navigation.TYPE_NAVIGATE)
          );
      
          if (isFreshNav) {
            // reload immediately
            window.location.reload();
          }
        }
      })();