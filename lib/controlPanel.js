"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const config = {
  controlPanelSections: [{
    label: (0, _core.t)('Event definition'),
    controlSetRows: [['entity'], [{
      name: 'all_columns_x',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Event Names'),
        description: (0, _core.t)('Columns to display'),
        mapStateToProps: state => ({
          choices: (0, _chartControls.columnChoices)(state == null ? void 0 : state.datasource)
        }),
        // choices is from `mapStateToProps`
        default: control => control.choices && control.choices.length > 0 ? control.choices[0][0] : null,
        validators: [_core.validateNonEmpty]
      }
    }], ['row_limit'], [{
      name: 'order_by_entity',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Order by entity id'),
        description: (0, _core.t)('Important! Select this if the table is not already sorted by entity id, ' + 'else there is no guarantee that all events for each entity are returned.'),
        default: true
      }
    }], [{
      name: 'min_leaf_node_event_count',
      config: {
        type: 'SelectControl',
        freeForm: false,
        label: (0, _core.t)('Minimum leaf node event count'),
        default: 1,
        choices: (0, _chartControls.formatSelectOptionsForRange)(1, 10),
        description: (0, _core.t)('Leaf nodes that represent fewer than this number of events will be initially ' + 'hidden in the visualization')
      }
    }]]
  }, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['adhoc_filters'], ['custom_filters']]
  }, {
    label: (0, _core.t)('Additional metadata'),
    controlSetRows: [[{
      name: 'all_columns',
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      config: {
        type: 'SelectControl',
        multi: true,
        label: (0, _core.t)('Metadata'),
        default: [],
        description: (0, _core.t)('Select any columns for metadata inspection'),
        optionRenderer: c => /*#__PURE__*/_react.default.createElement(_chartControls.ColumnOption, {
          showType: true,
          column: c
        }),
        valueRenderer: c => /*#__PURE__*/_react.default.createElement(_chartControls.ColumnOption, {
          column: c
        }),
        valueKey: 'column_name',
        allowAll: true,
        mapStateToProps: state => ({
          options: state.datasource ? state.datasource.columns : []
        }),
        commaChoosesOption: false,
        freeForm: true
      }
    }]]
  }],
  controlOverrides: {
    entity: {
      label: (0, _core.t)('Entity ID'),
      description: (0, _core.t)('e.g., a "user id" column')
    },
    row_limit: {
      label: (0, _core.t)('Max Events'),
      description: (0, _core.t)('The maximum number of events to return, equivalent to the number of rows')
    }
  }
};
var _default = config;
exports.default = _default;