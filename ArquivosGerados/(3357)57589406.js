    private async Task GenerateUrl(Model model)&#xD;&#xA;            {&#xD;&#xA;                var urlModel = GetUrlByOrganizationId(model.OrgId);&#xD;&#xA;                var org = GetOrg(model.Id);&#xD;&#xA;                model.Url = brand.Domain + org.Name;&#xD;&#xA;                await Task.FromResult(model.Url);&#xD;&#xA;            }&#xD;&#xA;            private async Task<Email> GenerateEmail(User receiver, Guid brandId)&#xD;&#xA;            {&#xD;&#xA;                var model = new Model()&#xD;&#xA;                {&#xD;&#xA;                    title = "",&#xD;&#xA;                    Organization = organization,&#xD;&#xA;                    Url = string.Empty&#xD;&#xA;                };&#xD;&#xA;                try&#xD;&#xA;                {&#xD;&#xA;                    await model.SetReceiverAsync(receiver, 0, model.Locale, model.Dialect);&#xD;&#xA;                    await this.GenerateUrl(model);&#xD;&#xA;                }&#xD;&#xA;                catch (Exception exc)&#xD;&#xA;                {&#xD;&#xA;                    this.Log(LogLevels.Warning, exc.Message);&#xD;&#xA;                    return null;&#xD;&#xA;                }&#xD;&#xA;       &#xD;&#xA;                // Send email&#xD;&#xA;                var email = Sender.RenderModel(template, model);&#xD;&#xA;                return email;&#xD;&#xA;            }