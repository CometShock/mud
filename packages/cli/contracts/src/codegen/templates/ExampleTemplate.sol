// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { TemplateContent, TemplateIndex } from "../Tables.sol";
import { Enum1, Enum2 } from "../Types.sol";
import { Statics, StaticsTableId, StaticsData } from "../tables/Statics.sol";
import { Counter, CounterTableId } from "../tables/Counter.sol";

bytes32 constant templateId = "Example";
bytes32 constant ExampleTemplateId = templateId;
uint256 constant LENGTH = 2;

function ExampleTemplate() {
  bytes32[] memory tableIds = new bytes32[](LENGTH);
  tableIds[0] = StaticsTableId;
  tableIds[1] = CounterTableId;
  TemplateIndex.set(templateId, tableIds);

  TemplateContent.set(
    templateId,
    StaticsTableId,
    Statics.encode(1, 1, "wasd", 0x71C7656EC7ab88b098defB751B7401B5f6d8976F, true, Enum1.E1, Enum2.E1)
  );
  TemplateContent.set(templateId, CounterTableId, Counter.encode(2));
}
