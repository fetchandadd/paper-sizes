/**
 * Copyright (C) 2015  Tim Tegeler
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

'use strict';

angular.module('paper-sizes', []).controller('sizes', function ($scope, $http, $sce) {

    $scope.databaseUrl = "paper-sizes.json";

    $scope.dina = true;

    $http.get($scope.databaseUrl).then(function (response) {

        $scope.paperSizes = response.data;
    }, function (response) {

    });

    $scope.highlight = function(text, search) {
        if (!search) {
            return $sce.trustAsHtml(text);
        }
        return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="blue-text text-darken-2">$&</span>'));
    };

});