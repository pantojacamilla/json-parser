    $("table tbody").on("change", "input[type=checkbox]", function (e) { &#xD;&#xA;        var currentCB = $(this);&#xD;&#xA;        var isChecked = this.checked;&#xD;&#xA;        if (currentCB.is(".groupHeadCheck")) {&#xD;&#xA;            var allCbs = currentCB.closest('tr').nextUntil('tr.groupHead').find('[type="checkbox"]').prop('checked', isChecked);&#xD;&#xA;        } else {&#xD;&#xA;            var allCbs = currentCB.closest('tr').prevAll("tr.groupHead:first").nextUntil('tr.groupHead').andSelf().find('[type="checkbox"]');&#xD;&#xA;            var allSlaves = allCbs.not(".groupHeadCheck");&#xD;&#xA;            var master = allCbs.filter(".groupHeadCheck");&#xD;&#xA;            var allChecked;&#xD;&#xA;            if (!isChecked) {&#xD;&#xA;                allChecked = false;&#xD;&#xA;            } else {&#xD;&#xA;                allChecked = allSlaves.filter(":checked").length === allSlaves.length;&#xD;&#xA;            }&#xD;&#xA;            master.prop("checked", allChecked);&#xD;&#xA;        }&#xD;&#xA;    });&#xD;&#xA;    $(".groupHead").next().find("[type=checkbox]").change();