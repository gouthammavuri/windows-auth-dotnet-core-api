using Microsoft.AspNetCore.Authorization;

namespace DotnetCore.Api.WinAuth
{
    public class PermissionRequirement : IAuthorizationRequirement
    {
        private readonly string _policyName;
        public PermissionRequirement(string policyName)
        {
            _policyName = policyName;
        }
    }
}