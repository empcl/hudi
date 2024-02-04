package org.apache.hudi.sink.utils;

import org.apache.hudi.common.fs.FSUtils;
import org.apache.hudi.common.table.timeline.HoodieInstant;
import org.apache.hudi.common.table.timeline.HoodieTimeline;
import org.apache.hudi.common.util.collection.Pair;

import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;

/**
 * Operation on hudi instant
 */
public class InstantUtil {

  /**
   * Sort files in reverse order by instant time
   */
  public static final Comparator<? super Pair<String, List<String>>> COMPARATOR_REVERSE =
      (Comparator<Pair<String, List<String>>>) (o1, o2) -> {
        String f1 = o1.getLeft() != null ? o1.getLeft() : o1.getRight().get(0);
        String f2 = o2.getLeft() != null ? o2.getLeft() : o2.getRight().get(0);
        return getInstantTimeFromFile(f2).compareTo(getInstantTimeFromFile(f1));
      };


  /**
   * Get instant except for table service
   */
  public static final Predicate<HoodieInstant> EXCLUDE_TABLE_SERVICE_ACTION =
      instant -> !instant.getAction().equalsIgnoreCase(HoodieTimeline.COMPACTION_ACTION)
          && !instant.getAction().equalsIgnoreCase(HoodieTimeline.LOG_COMPACTION_ACTION)
          && !instant.getAction().equalsIgnoreCase(HoodieTimeline.CLEAN_ACTION)
          && !instant.getAction().equalsIgnoreCase(HoodieTimeline.REPLACE_COMMIT_ACTION)
          && !instant.getAction().equalsIgnoreCase(HoodieTimeline.ROLLBACK_ACTION);


  /**
   * get instant time from base file or log file
   * @param instantFile instant file
   * @return instant time
   */
  public static String getInstantTimeFromFile(String instantFile) {
    if (instantFile.contains("/")) {
      instantFile = instantFile.substring(instantFile.lastIndexOf("/") + 1);
    }
    return FSUtils.getCommitTime(instantFile);
  }
}
