"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(position, speed, direction) {
        var _this = _super.call(this, position, speed, direction) || this;
        _this.update = function (dt) {
            _super.prototype.update.call(_this, dt);
            if (_this.collisionRect().top() <= 0 ||
                _this.collisionRect().bottom() >= game.gameFieldRect.bottom()) {
                _this.direction.y *= -1;
            }
        };
        _this.width = 20;
        _this.height = 10;
        return _this;
    }
    return Player;
}(Entity));
exports.Player = Player;